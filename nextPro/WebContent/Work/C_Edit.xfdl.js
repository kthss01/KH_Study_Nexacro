(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chk_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edt_01","60","70","238","56",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("아무거나 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","62","25","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("> 일반 Edit");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","62","183","238","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_displaynulltext("읽기 전용입니다");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","64","138","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("> 읽기전용 Edit");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","64","295","238","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("비밀번호 edit 입니다");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","66","250","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("> 비밀번호 Edit");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","64","406","238","56",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("영어만 입력합니다");
            obj.set_inputtype("english");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","66","361","234","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("> 영어로만 표기하는 Edit/MaxLength");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","61","520","238","56",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("숫자만입력합니다");
            obj.set_inputtype("number,digit");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","63","475","136","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("> 숫자만 허용하는 Edit");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","260","250","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("비밀번호 표시하기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("C_Edit.xfdl", function() {

        this.edt_01_onchanged = function(obj,e)
        {
        	alert(e.prevalue);
        	this.edt_02.set_value(e.postvalue);
        };

        this.chk_01_onclick = function(obj, e) {
        	alert(obj.value);
        	this.edt_03.set_password(!obj.value);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_01.addEventHandler("onchanged",this.edt_01_onchanged,this);
            this.sta_01.addEventHandler("onclick",this.sta_01_onclick,this);
            this.edt_02.addEventHandler("onchanged",this.Common_onchanged,this);
            this.sta_02.addEventHandler("onclick",this.sta_01_onclick,this);
            this.edt_03.addEventHandler("onchanged",this.Common_onchanged,this);
            this.sta_03.addEventHandler("onclick",this.sta_01_onclick,this);
            this.edt_04.addEventHandler("onchanged",this.Common_onchanged,this);
            this.sta_04.addEventHandler("onclick",this.sta_01_onclick,this);
            this.edt_05.addEventHandler("onchanged",this.Common_onchanged,this);
            this.sta_05.addEventHandler("onclick",this.sta_01_onclick,this);
            this.CheckBox00.addEventHandler("onclick",this.chk_01_onclick,this);
        };

        this.loadIncludeScript("C_Edit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
