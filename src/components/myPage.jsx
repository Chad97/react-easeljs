import React from 'react';
import { DatePicker } from 'antd'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class mypage extends React.Component {
    constructor () {
        super()
    } 

    render () {
        return <div>
            <DatePicker  onChange={this.mydate} />
            <br />
            <MonthPicker onChange={this.mydate} placeholder="Select month" />
            <br />
            <RangePicker onChange={this.mydate} />
            <br />
            <WeekPicker onChange={this.mydate} placeholder="Select week" />
        </div>
    }

    mydate = () => {
        console.log(this.value);
    }
    
    
}