class Tasks{
    constructor(task, date){
        this._task = task;
        this._date = date;
    }

    get task(){
        return this._task;
    }
    set task(task){
        this._task = task;
    }
    get date(){
        return this._date;
    }
    set date(date){
        this._date = date;
    }
}