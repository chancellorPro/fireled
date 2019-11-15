<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('basket-add/{id}', 'Basket\IndexController@basketAdd')->name('basket.add');
Route::post('basket-remove/{id}', 'Basket\IndexController@basketRemove')->name('basket.remove');
Route::post('order-send', 'Basket\IndexController@orderSend')->name('order.send');
Route::get('set-phone', 'Basket\IndexController@setPhone')->name('set.phone');
Route::post('save-phone', 'Basket\IndexController@savePhone')->name('save.phone');

Route::middleware(['auth'])->group(function () {

    Route::get('telegram', 'ActionLog\IndexController@sendMessage')->name('telegram');
    Route::resource('product', 'Product\IndexController')->except('update');
    Route::post('product/update/{id}', 'Product\IndexController@update')->name('product.update');
    Route::resource('user', 'User\IndexController');

});

Route::get('/home', 'HomeController@index')->name('home');
