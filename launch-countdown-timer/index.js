var sec, min, hou, day;

const show_days = () => {
    const day_sel = 'div.c-bg.days'
    const _fc_i = document.querySelector(day_sel +  '> div > div.fc-i')
    
    let _fc_t = document.querySelector(day_sel + '> div > div.fc-t')
    let _fi_f = document.querySelector(day_sel + '> div > div.fc-i > div.fi-f')
    let _fi_b = document.querySelector(day_sel + '> div > div.fc-i > div.fi-b')
    let _fc_b = document.querySelector(day_sel + '> div > div.fc-b')

    
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1);
    let dday = nextYear.getTime() - today.getTime();

    
    if (day !== undefined && day !== Math.ceil(dday/(1000*60*60*24)) ) {
        _fc_i.style.animation = 'flip 1s infinite both'
    } else {
        _fc_i.style.animation = ''
    }

    day = day === undefined ? Math.ceil(dday/(1000*60*60*24)) : day
    _fc_t.innerHTML = (day-1)
    _fi_f.innerHTML = day
    _fi_b.innerHTML = (day-1)
    _fc_b.innerHTML = day

    day = Math.ceil(dday/(1000*60*60*24))
    setTimeout(show_days, 1000);
}

const show_hours = () => {
    const hou_sel = 'div.c-bg.hours'
    const _fc_i = document.querySelector(hou_sel +  '> div > div.fc-i')
    
    let _fc_t = document.querySelector(hou_sel + '> div > div.fc-t')
    let _fi_f = document.querySelector(hou_sel + '> div > div.fc-i > div.fi-f')
    let _fi_b = document.querySelector(hou_sel + '> div > div.fc-i > div.fi-b')
    let _fc_b = document.querySelector(hou_sel + '> div > div.fc-b')

    
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1);
    let dday = nextYear.getTime() - today.getTime();

    
    if (hou !== undefined && hou !== Math.ceil((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ) {
        _fc_i.style.animation = 'flip 1s infinite both'
        
    } else {
        _fc_i.style.animation = ''
    }

    hou = hou === undefined ? Math.ceil((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : hou
    _fc_t.innerHTML = (hou-1)
    _fi_f.innerHTML = hou
    _fi_b.innerHTML = (hou-1)
    _fc_b.innerHTML = hou

    hou = Math.ceil((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    setTimeout(show_hours, 1000);
}

const show_minutes = () => {
    const min_sel = 'div.c-bg.minutes'
    const _fc_i = document.querySelector(min_sel +  '> div > div.fc-i')
    
    let _fc_t = document.querySelector(min_sel + '> div > div.fc-t')
    let _fi_f = document.querySelector(min_sel + '> div > div.fc-i > div.fi-f')
    let _fi_b = document.querySelector(min_sel + '> div > div.fc-i > div.fi-b')
    let _fc_b = document.querySelector(min_sel + '> div > div.fc-b')

    
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1);
    let dday = nextYear.getTime() - today.getTime();

    
    if (min !== undefined && min !== Math.ceil((dday % (1000 * 60 * 60)) / (1000 * 60)) ) {
        _fc_i.style.animation = 'flip 1s infinite both'
        
    } else {
        _fc_i.style.animation = ''
    }

    min = min === undefined ? Math.ceil((dday % (1000 * 60 * 60)) / (1000 * 60)) : min
    _fc_t.innerHTML = (min-1)
    _fi_f.innerHTML = min
    _fi_b.innerHTML = (min-1)
    _fc_b.innerHTML = min

    min = Math.ceil((dday % (1000 * 60 * 60)) / (1000 * 60))
    setTimeout(show_minutes, 1000);
}

const show_second = () => {
    const sec_sel = 'div.c-bg.seconds'
    const _fc_i = document.querySelector(sec_sel +  '> div > div.fc-i')
    
    let _fc_t = document.querySelector(sec_sel + '> div > div.fc-t')
    let _fi_f = document.querySelector(sec_sel + '> div > div.fc-i > div.fi-f')
    let _fi_b = document.querySelector(sec_sel + '> div > div.fc-i > div.fi-b')
    let _fc_b = document.querySelector(sec_sel + '> div > div.fc-b')

    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1);
    let dday = nextYear.getTime() - today.getTime();
    if (sec !== Math.ceil((dday % (1000 * 60)) / 1000) ) {
        _fc_i.style.animation = 'flip 1s infinite both'
    }
    sec = Math.ceil((dday % (1000 * 60)) / 1000)
    _fc_t.innerHTML = ((sec - 1) === 0 ? 60 : (sec - 1))
    _fi_f.innerHTML = sec
    _fi_b.innerHTML = ((sec - 1) === 0 ? 60 : (sec - 1))
    _fc_b.innerHTML = sec
    setTimeout(show_second, 1000);
}

const flip_play = (e) => {
    e.style.animation = 'flip 1s 1 both'
}

window.onload = () => {
    show_days();
    show_hours();
    show_minutes();
    show_second();
}