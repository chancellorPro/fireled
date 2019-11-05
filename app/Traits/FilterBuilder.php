<?php

namespace App\Traits;

/**
 * Trait FilterBuilder
 */
trait FilterBuilder
{

    /**
     * Applied filters
     *
     * @var array
     */
    private $appliedFilter = [];

    /**
     * Apply filter
     *
     * @param mixed $request     Request
     * @param mixed $builder     Builder
     * @param mixed $queryIgnore Query Ignore List
     *
     * @return mixed
     */
    private function applyFilter($request, $builder, $queryIgnore = [])
    {
        $requestData = $request->except(['page', 'clear_filter']);

        $where = [];

//        if (!$request->has('clear_filter') && empty($requestData)) { // отключено хранение фильтра в сессии
//            $requestData = session($request->route()->getName() . 'filter');
//        }

        foreach (self::FILTER_FIELDS as $field => $condition) {
            $filterValue = isset($requestData[$field]) ? $requestData[$field] : false;
            if ($filterValue !== false) {
                $this->appliedFilter[$field] = $filterValue;

                if(defined('self::FILTER_FIELDS_ALIAS') && in_array($field, self::FILTER_FIELDS_ALIAS)) {
                    $field = array_search($field, self::FILTER_FIELDS_ALIAS);
                }

                if (!in_array($field, $queryIgnore)) {
                    switch ($condition) {
                        case 'equal':
                            $where[] = [$field, '=', $filterValue];
                            break;

                        case 'like':
                            $where[] = [$field, 'like', '%' . $filterValue . '%'];
                            break;

                        case 'like_right':
                            $where[] = [$field, 'like', $filterValue . '%'];
                            break;

                        case 'in':
                            $builder->whereIn($field, (array) $filterValue);
                            break;

                        case 'numbers':
                            $numbers = array_map('intval', array_filter(preg_split('/\D+/', $filterValue)));
                            if ($numbers) {
                                $builder->whereIn($field, $numbers);
                            }
                            break;
                        case 'date_range':
                            if(!empty($filterValue['from'])) {
                                $dateFrom = fromPacificToUTC($filterValue['from'] . ' 00:00:00');
                                $where[] = [$field, '>=', $dateFrom];
                            }
                            if(!empty($filterValue['to'])) {
                                $dateTo = fromPacificToUTC($filterValue['to'] . ' 23:59:59');
                                $where[] = [$field, '<=', $dateTo];
                            }
                            break;
                        case 'int_range':
                            if(!empty($filterValue['from'])) {
                                $intFrom = $filterValue['from'];
                                $where[] = [$field, '>=', $intFrom];
                            }
                            if(!empty($filterValue['to'])) {
                                $intTo = $filterValue['to'];
                                $where[] = [$field, '<=', $intTo];
                            }
                            break;
                        case 'date_range_pst':
                            if(!empty($filterValue['from'])) {
                                $dateFrom = $filterValue['from'] . ' 00:00:00';
                                $where[] = [$field, '>=', $dateFrom];
                            }
                            if(!empty($filterValue['to'])) {
                                $dateTo = $filterValue['to'] . ' 23:59:59';
                                $where[] = [$field, '<=', $dateTo];
                            }
                            break;

                        case 'manual':
                            $methodName = 'apply'
                                . str_replace('_', '', mb_convert_case($field, MB_CASE_TITLE, "UTF-8"))
                                . 'Filter';
                            if (method_exists($this, $methodName)) {
                                $builder = $this->{$methodName}($request, $builder);
                            }
                            break;
                    }
                }
            }
        }

//        session([$request->route()->getName() . 'filter' => $this->appliedFilter]); // отключено хранение фильтра в сессии

        if ($where) {
            $builder->where($where);
        }

        $sortingFields = $this->getSorting();
        if (!empty($sortingFields)) {
            if ($request->has('sort')) {
                $sort = $request->get('sort');

                $direction = 'desc';
                if ($sort[0] === '-') {
                    $direction = 'asc';
                    $sort = substr($sort, 1);
                }

                if (in_array($sort, $sortingFields)) {
                    $builder->getQuery()->orders = null;
                    $builder->orderBy($sort, $direction);
                }
            }
        }

        return $builder;
    }

    /**
     * Get filter
     *
     * @return array
     */
    private function getFilter()
    {
        $this->appliedFilter['env'] = environment();
        return $this->appliedFilter;
    }

    /**
     * Get sorting fields
     *
     * @return array
     */
    private function getSorting()
    {
        return defined('self::SORTING_FIELDS') ? self::SORTING_FIELDS : [];
    }
}
