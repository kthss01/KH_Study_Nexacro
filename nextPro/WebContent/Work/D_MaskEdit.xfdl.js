(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("D_MaskEdit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_01","68","45","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("> 기본 MaskEdit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01","62","95","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_02","62","148","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_format("#,###.00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","62","203","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("> 주민번호 뒷자리 * 표시");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_03","62","250","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_format("######-{#######}");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00","330","38","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("> MaskEdit 표기법 (String)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","330","71","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("> @@@@ 모든 문자 가능");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_00","510","71","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_format("@@@@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","330","133","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("> #### 숫자가능 (0~9)");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_01","510","140","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_01","330","195","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("> **** 영어 대소문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_02","510","205","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_format("****");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_02","330","257","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("> 9999 영문, 숫자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_03","510","270","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_format("9999");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_03","330","319","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("> AAAA 영대문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_04","510","335","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_format("AAAA");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_04","330","381","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("> aaaa 영소문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_05","510","400","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_format("aaaa");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_05","330","443","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("> A{AA}A 비밀번효 표기");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_05_00","510","465","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_format("A{AA}A");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_06","770","71","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("> ####");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00","770","133","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("> #,##9 (없으면 빈값)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_01_00","770","195","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("> #,##0 (없으면 0)");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_02_00","950","195","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_format("#,##0");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_01_00","950","133","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_format("#,##9");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_00_00","950","71","228","45",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_format("####");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01","773","38","174","52",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("> MaskEdit 표기법 (Number)");
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
        this.registerScript("D_MaskEdit.xfdl", function() {

        this.sta_01_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("D_MaskEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
