<?php


namespace App\Traits;


trait PstMutator
{

    /**
     * created_at
     *
     * @return string
     */
    public function getCreatedAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('created_at'));
    }

    /**
     * updated_at
     *
     * @return string
     */
    public function getUpdatedAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('updated_at'));
    }

    /**
     * visited_at
     *
     * @return string
     */
    public function getVisitedAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('visited_at'));
    }

    /**
     * blocked_at
     *
     * @return string
     */
    public function getBlockedAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('blocked_at'));
    }

    /**
     * paid_at
     *
     * @return string
     */
    public function getPaidAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('paid_at'));
    }

    /**
     * next_fcd
     *
     * @return string
     */
    public function getNextFcdPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('next_fcd'));
    }

    /**
     * started_at
     *
     * @return string
     */
    public function getStartedAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('started_at'));
    }

    /**
     * Setter started_at
     *
     * @param $date
     */
    public function setStartedAtPstAttribute($date)
    {
        $this->attributes['started_at'] = !empty($date) ? fromPacificToUTC($date) : null;
    }

    /**
     * finished_at
     *
     * @return string
     */
    public function getFinishedAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('finished_at'));
    }

    /**
     * Setter finished_at
     *
     * @param $date
     */
    public function setFinishedAtPstAttribute($date)
    {
        $this->attributes['finished_at'] = !empty($date) ? fromPacificToUTC($date) : null;
    }

    /**
     * date_from
     *
     * @return string
     */
    public function getDateFromPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('date_from'));
    }

    /**
     * Setter started_at
     *
     * @param $date
     */
    public function setDateFromPstAttribute($date)
    {
        $this->attributes['date_from'] = !empty($date) ? fromPacificToUTC($date) : null;
    }

    /**
     * date_to
     *
     * @return string
     */
    public function getDateToPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('date_to'));
    }

    /**
     * Setter finished_at
     *
     * @param $date
     */
    public function setDateToPstAttribute($date)
    {
        $this->attributes['date_to'] = !empty($date) ? fromPacificToUTC($date) : null;
    }

    /**
     * date
     *
     * @return string
     */
    public function getDatePstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('date'));
    }

    /**
     * Convertation helper
     *
     * @param $date
     * @return string
     */
    private function toPacificTime($date)
    {
        if (!empty($date)) {
            return toPacificTime($date);
        }

        return $date;
    }
}