import React, { Component } from 'react';
import { Calendar } from '../../components/lib/calendar/Calendar';
import { Dropdown } from '../../components/lib/dropdown/Dropdown';
import { CalendarDoc } from '../../components/doc/calendar';
import { addLocale } from '../../components/lib/api/Locale';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class CalendarDemo extends Component {

    constructor(props) {
        super(props);

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            date14: null,
            date15: null,
            date16: null,
            date17: null,
            dates1: null,
            dates2: null,
            visible: false
        };

        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);

        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        this.invalidDates = [today];

        this.dateTemplate = this.dateTemplate.bind(this);
        this.monthNavigatorTemplate = this.monthNavigatorTemplate.bind(this);
        this.yearNavigatorTemplate = this.yearNavigatorTemplate.bind(this);
        this.onVisibleChange = this.onVisibleChange.bind(this);

        addLocale('es', {
            firstDayOfWeek: 1,
            dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
            dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
            monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
            monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            today: 'Hoy',
            clear: 'Claro'
        });
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    monthNavigatorTemplate(e) {
        return <Dropdown value={e.value} options={e.options} onChange={(event) => e.onChange(event.originalEvent, event.value)} style={{ lineHeight: 1 }} />;
    }

    yearNavigatorTemplate(e) {
        return <Dropdown value={e.value} options={e.options} onChange={(event) => e.onChange(event.originalEvent, event.value)} className="ml-2" style={{ lineHeight: 1 }} />;
    }

    onVisibleChange(e) {
        this.setState((prevState) => ({
            visible: e.type === 'dateselect' || !prevState.visible
        }), e.callback);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Calendar Component</title>
                    <meta name="description" content="Calendar also known as DatePicker, is a form component to work with dates." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Calendar</h1>
                        <p>Calendar also known as DatePicker, is a form component to work with dates.</p>
                    </div>
                    <DocActions github="calendar/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Popup</h5>
                        <div className="p-fluid grid formgrid">
                            <div className="field col-12 md:col-4">
                                <label htmlFor="basic">Basic</label>
                                <Calendar id="basic" value={this.state.date1} onChange={(e) => this.setState({ date1: e.value })} />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="icon">Icon</label>
                                <Calendar id="icon" value={this.state.date2} onChange={(e) => this.setState({ date2: e.value })} showIcon />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="spanish">Spanish</label>
                                <Calendar id="spanish" value={this.state.date3} onChange={(e) => this.setState({ date3: e.value })} locale="es" dateFormat="dd/mm/yy" />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="minmax">MinMax</label>
                                <Calendar id="minmax" value={this.state.date4} onChange={(e) => this.setState({ date4: e.value })} minDate={this.minDate} maxDate={this.maxDate} readOnlyInput />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="disableddays">Disabled Days</label>
                                <Calendar id="disableddays" value={this.state.date5} onChange={(e) => this.setState({ date5: e.value })} disabledDates={this.invalidDates} disabledDays={[0, 6]} readOnlyInput />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="navigators">Navigators</label>
                                <Calendar id="navigators" value={this.state.date6} onChange={(e) => this.setState({ date6: e.value })} monthNavigator yearNavigator yearRange="2010:2030" />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="multiple">Multiple</label>
                                <Calendar id="multiple" value={this.state.dates1} onChange={(e) => this.setState({ dates1: e.value })} selectionMode="multiple" readOnlyInput />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="range">Range</label>
                                <Calendar id="range" value={this.state.dates2} onChange={(e) => this.setState({ dates2: e.value })} selectionMode="range" readOnlyInput />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="buttonbar">Button Bar</label>
                                <Calendar id="buttonbar" value={this.state.date7} onChange={(e) => this.setState({ date7: e.value })} showButtonBar />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="time24">Time / 24h</label>
                                <Calendar id="time24" value={this.state.date8} onChange={(e) => this.setState({ date8: e.value })} showTime showSeconds />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="time12">Time / 12h</label>
                                <Calendar id="time12" value={this.state.date9} onChange={(e) => this.setState({ date9: e.value })} timeOnly hourFormat="12" />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="monthpicker">Month Picker</label>
                                <Calendar id="monthpicker" value={this.state.date10} onChange={(e) => this.setState({ date10: e.value })} view="month" dateFormat="mm/yy" yearNavigator yearRange="2010:2030" />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="multiplemonths">Multiple Months</label>
                                <Calendar id="multiplemonths" value={this.state.date11} onChange={(e) => this.setState({ date11: e.value })} numberOfMonths={3} />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="datetemplate">Date Template</label>
                                <Calendar id="datetemplate" value={this.state.date12} onChange={(e) => this.setState({ date12: e.value })} dateTemplate={this.dateTemplate} />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="touchUI">TouchUI</label>
                                <Calendar id="touchUI" value={this.state.date13} onChange={(e) => this.setState({ date13: e.value })} touchUI />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="mask">Mask</label>
                                <Calendar id="mask" value={this.state.date14} onChange={(e) => this.setState({ date14: e.value })} mask="99/99/9999" />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="controlled">Visibility Control</label>
                                <Calendar id="controlled" value={this.state.date15} onChange={(e) => this.setState({ date15: e.value })} visible={this.state.visible} onVisibleChange={this.onVisibleChange} />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label htmlFor="navigatorstemplate">Navigators Template</label>
                                <Calendar id="navigatorstemplate" value={this.state.date16} onChange={(e) => this.setState({ date16: e.value })} monthNavigator yearNavigator yearRange="2010:2030"
                                    monthNavigatorTemplate={this.monthNavigatorTemplate} yearNavigatorTemplate={this.yearNavigatorTemplate} />
                            </div>
                        </div>

                        <h5>Inline</h5>
                        <Calendar value={this.state.date17} onChange={(e) => this.setState({ date17: e.value })} inline showWeek />
                    </div>
                </div>

                <CalendarDoc></CalendarDoc>
            </div>
        );
    }
}
