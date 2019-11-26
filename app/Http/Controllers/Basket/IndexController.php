<?php

namespace App\Http\Controllers\Basket;

use App\Http\Controllers\Controller;
use App\Models\Basket;
use App\Models\Order;
use App\Models\User;
use App\Traits\FilterBuilder;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\View\View;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'id'         => 'equal',
        'name'       => 'like_right',
        'parent_id'  => 'manual',
        'page_limit' => 'manual'
    ];

    /**
     * List of products
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {
        return view('basket.add', [
            'basket' => Basket::with('product.productFiles')->where(['user_id' => auth()->id()])->get(),
        ]);
    }

    /**
     * Create new product view
     *
     * @param Request $request
     * @param int $id
     * @return Factory|View
     */
    public function basketAdd(Request $request, int $id)
    {
        Basket::updateOrInsert(
            ['user_id' => auth()->user()->id, 'product_id' => $id],
            ['count' => (int)$request->get('qty')]
        );

        return view('basket.add', [
            'basket' => Basket::with('product.productFiles')->where(['user_id' => auth()->id()])->get(),
        ]);
    }

    /**
     * Create new product view
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function basketRemove(Request $request, int $id)
    {
        $basket_item = Basket::where(['user_id' => auth()->user()->id, 'product_id' => $id]);
        $basket_item->delete();

        return $this->success();
    }

    /**
     * order Send
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function orderSend(Request $request)
    {
        $basket_items_builder = Basket::selectRaw('count, product_id')->where(['user_id' => auth()->user()->id]);
        $basket_items = $basket_items_builder->get();
        $formData = $request->all();
        $total_sum = 0;

        foreach ($basket_items as $item) {
            $item->count = $formData[$item->product->id]['count'];
            $total_sum += $item->product->price * $item->count;
        }

        $order = Order::create([
            'user_id'    => auth()->user()->id,
            'order_data' => json_encode($basket_items->makeHidden('product')->toArray()),
            'total_sum'  => $total_sum,
            'status'     => 0
        ]);

        $this->sendMessage($order->id, $total_sum);
        $basket_items_builder->delete();

        return $this->success(['message' => 'Заказ № '.$order->id.' успешно создан! Ждите звонка оператора.']);
    }

    /**
     * Send Telegram message
     *
     * @param $id
     * @param $total_sum
     * @return bool|string
     */
    function sendMessage($id, $total_sum)
    {
        $order_link = "/order/$id/edit";

        $url = "https://api.telegram.org/bot" . env('TELEGRAM_TOKEN') . "/sendMessage?parse_mode=HTML&chat_id=" . env('CHAT_ID');
        $url = $url . "&text=Новый заказ на сумму ₴$total_sum: " . $_SERVER['HTTP_HOST'] . $order_link . ". \n\r" . auth()->user()->name;
        $ch = curl_init();
        $optArray = array(
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
        );
        curl_setopt_array($ch, $optArray);
        $result = curl_exec($ch);
        curl_close($ch);

        return $result;
    }

    /**
     * New user register form
     */
    public function setPhone()
    {
        return view('phone.add');
    }

    /**
     * New user register form
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function savePhone(Request $request)
    {
        $user = User::updateOrCreate(
            ['name' => $request->get('phone')],
            [
                'email' => $request->get('phone'),
                'password' => Hash::make('secret' . $request->get('phone'))
            ]
        );

        auth('web')->loginUsingId($user->id, TRUE);
        pushNotify('success', 'Теперь вы можете совершать покупки!');

        return redirect()->back();
    }
}
