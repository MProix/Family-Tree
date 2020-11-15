//---------------client height and width----------------------------------
var clientH = window.innerHeight;
var clientW = window.innerWidth;

//----convert units to set adaptables widths and heights----------------------
function toVh(value){
    return (100*value)/clientH;
};
function toVw(value){
    return (100*value)/clientW;
};
function vwToPx(value){
    return (clientW*value)/100;
};
function vhToPx(value){
    return (clientH*value)/100;
};

//-----------------client object for family------------------------------------
class People {
    constructor(name,firstname,birthday,birthmonth,birthyear,biological_mother,biological_father, bro_and_sis,photo){
        this.name = 'name';
        this.firstname = 'firstname';
        this.birthday = 0;
        this.birthmonth = 0;
        this.birthyear = 0;
        this.biological_mother = 'mother_name';
        this.biological_father = 'father_name';
        this.bro_and_sis = [];
        this.photo = '';
    }    
};

