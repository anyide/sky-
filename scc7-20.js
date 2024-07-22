"ui";

//循环下一个判断控制
var ccl = true;
//循环结束
var ccr = false;
//键位
var ks = true;
//存储用户信息
var 存储1 = storages.create("用户名");
var 存储2 = storages.create("密钥");
//登录
var 登陆成功 = "dlcg"
var 账号不存在 = "zhbcz"
var 密码错误 = "mmcw"
var 输入密码 = "srmm"
var 时间用完 = "0"
//校验
var 校验成功 = "1"
var 校验失败 = "0"
//注册
var 缺少 = "que"
var 存在 = "cz"
var 注册成功 = "cg"
//充值
var 无账号卡密 = "wzhkm"
var 无卡密 = "mykm"
var 充值成功 = "ok"
//md5基础效验码
var mdm = "anyi2014520"
var AES_Padding = "PKCS7Padding"
var AES_Model = "ECB"
var AES_Key = "anyi2002anyi1314"
var AES_Aws = "128"
var AES_OutType = "base64"
var AES_Chat = "UTF-8"
//统一地址
var api1 = "http://gx.anyi14.top/api1"
var api2 = "http://gx.anyi14.top/api2"
//收藏配置文件
var scPath = "/sdcard/意几收藏夹/收藏配置文件.txt"


if(!files.exists(scPath))
{
    files.createWithDirs(scPath);
    toast("该设备貌似是初次使用，还未配置收藏文件")
    toast("创建完成")
    }


ui.layout(
<frame background="#00000000">
<vertical h="*" w="*" gravity="center_vertical">
<img w="*" h="120dp" margin="10dp 20dp 20dp 10dp" src="http://gx.anyi14.top/file/home/1.png" />
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">₍˄·͈༝·͈˄*₎◞ ̑̑   :</text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp"></text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">因为相遇，所以美好</text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp"></text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">很美却易丢失</text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">人生不过尔尔，得失皆应有因</text>
<text gravity="center" color="#03A9F4" textStyle="italic" size="18sp">得之我幸，失之我命</text>
</vertical>
 </frame>
);setTimeout(function () {showLoginUI();}
, 2000);

function showLoginUI(){
    ui.layout(
        <vertical bg="#00000000">
        <vertical h="auto" align="center" margin="50 0 100 0" marginTop="100">
        <img src="http://gx.anyi14.top/file/denglu/1/1.png" w="250" h="250"/>
        </vertical>
        <card w="*" h="400" margin="20" cardCornerRadius="15dp" cardBackgroundColor="#FFFFFF"
        cardElevation="15dp" gravity="bottom" foreground="?selectableItemBackground">
        <vertical>
            <vertical padding="16">
        <text textStyle="bold" textSize="20sp"  textColor="#FF7884FF">请使用账号登录</text>
        </vertical>
        <card w="*" h="40dp" margin="60dp 0dp 60dp 5dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#FFFFFF" gravity="center_vertical">
        <img w="30" h="30" />
        <input id="name" w="290" h="60" gravity="center" hint="请输入账号" inputType="textVisiblePassword"/>
        </card>
        <card w="*" h="40dp" margin="60dp 10dp 60dp 5dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#FFFFFF" gravity="center_vertical">
        <img w="30" h="30" />
        <input id="password" w="290" h="60" gravity="center" hint="请输入密码" inputType="textVisiblePassword"/>
        </card>
        <vertical padding="6" margin="0 0 0 0">
        <text margin="8" id="announcement"></text>
        </vertical>    
            <card w="*" h="40dp" margin="60dp 10dp 60dp 5dp" cardCornerRadius="30dp" cardElevation="3dp" cardBackgroundColor="#FF6D8DFF" gravity="center_vertical">
                    <button id="登录" w="250" h="*" text="登录" style="Widget.AppCompat.Button.Borderless" w="*"/>
            </card>
            <card w="*" h="40dp" margin="60dp 10dp 60dp 5dp" cardCornerRadius="30dp" cardElevation="0dp" cardBackgroundColor="#FF6D8DFF" gravity="center_vertical">
                    <button id="vLog" w="250" h="*" text="注册" style="Widget.AppCompat.Button.Borderless" w="*"/>
            </card>
            <card w="*" h="40dp" margin="60dp 10dp 60dp 5dp" cardCornerRadius="30dp" cardElevation="0dp" cardBackgroundColor="#FF6D8DFF" gravity="center_vertical">
                    <button id="卡密" w="250" h="*" text="使用时长密钥" style="Widget.AppCompat.Button.Borderless" w="*"/>
            </card>
        </vertical>
            </card>
    </vertical>
   );   
     var name = 存储1.get("用户名");
if (name != undefined) ui.name.setText(name);
   var password = 存储2.get("密钥");
if (password != undefined) ui.password.setText(password);

ui.登录.click(function() {
    var 用户名 = ui.name.text();
    var 密钥 = ui.password.text();
    if (!密钥){
        toast("请输入密钥");
    }else{
        存储1.put("用户名",用户名);
        存储2.put("密钥", 密钥);
        ui.登录.setText("登录中...")
var 校验码 = md5(mdm);
var bdsj=(load_Time());
var 时间效验=md5(bdsj);
    threads.start(function () {
var url = "http://gx.anyi14.top/api/yz.php?zh=" + 用户名 +"&mm="+密钥 +"&yz=" +校验码 +"&bdsj=" +时间效验
var res = http.get(url);
var content = res.body.string()
var 解码=AesDecode(content)
var data = JSON.parse(解码);
var d5效验=data.d5xy;
var 时间戳=data.sjc;
var 登陆状态=data.dlzt;
var 剩余时长=data.sj;
var 网络时=data.dqsj;

switch(网络时){
    case bdsj :
switch(d5效验){
    case 校验成功:
        switch(时间戳){
            case 校验成功:
                switch(登陆状态){
                    case 登陆成功:
                        switch(剩余时长){
                            case 时间用完:
                            toast("时长不足");
                            break;
                            default :
                            toast("登陆成功" + 剩余时长 + "天");
                            ui.post(() => {showMianUI()});
                            break;
                                }
                    break;
                    case 账号不存在:
                    toast("账户不存在");
                    break;
                    case 密码错误:
                    toast("密码错误");
                    break;
                    case 输入密码:
                    toast("输入密码");
                    break;
                    default :
                    toast("异常错误 代码：#3");
                    break;
                        }
            break;
            case 校验失败:
            toast("异常错误2");
            break;
            default :
            toast("异常错误 代码：#2");
            break;
                }
    break;
    case 校验失败:
    toast("异常错误1");
    break;
    default :
    toast("异常错误 代码：#1");
    break;
        }
break ;
default :
toast("异常错误 代码：#0");
break;
    }


        })
    }});
    
    ui.vLog.click(function() {showRegisterUI()});
    ui.卡密.click(function() {keyUI()});
}

function showRegisterUI(){
    ui.layout(
        <vertical bg="#00000000">
        <vertical h="auto" align="center" margin="50 0 50 0" marginTop="100">
        <img src="http://gx.anyi14.top/file/denglu/2/1.png" w="250" h="250"/>
        </vertical>
        <card w="*" h="420" margin="20" cardCornerRadius="15dp" cardBackgroundColor="#FFFFFF"
        cardElevation="15dp" gravity="bottom" foreground="?selectableItemBackground">
        <vertical>
            <vertical padding="16">
        <text textStyle="bold" textSize="20sp" textColor="#FF7884FF">请填写信息注册</text>
        </vertical>
        <card w="*" h="45dp" margin="30dp 0dp 30dp 10dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#FFFFFF" gravity="center_vertical">
        <img w="30" h="30" />
        <input id="name" w="290" h="60" gravity="center" hint="请输入账号" inputType="textVisiblePassword"/>
        </card>
        <card w="*" h="45dp" margin="30dp 10dp 30dp 10dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#FFFFFF" gravity="center_vertical">
        <img w="30" h="30" />
        <input id="password" w="290" h="60" password="true" gravity="center" hint="请输入密码" inputType="textVisiblePassword"/>
        </card>
        <vertical padding="6" margin="0 0 0 0">
        <text margin="8" id="announcement"></text>
        </vertical>    
            <card w="*" h="45dp" margin="30dp 10dp 30dp 10dp" cardCornerRadius="30dp" cardElevation="3dp" cardBackgroundColor="#FF6D8DFF" gravity="center_vertical">
                    <button id="注册" w="250" h="*" text="确定" style="Widget.AppCompat.Button.Borderless" w="*"/>
            </card>
            <card w="*" h="45dp" margin="30dp 10dp 30dp 10dp" cardCornerRadius="30dp" cardElevation="0dp" cardBackgroundColor="#FF6D8DFF" gravity="center_vertical">
                    <button id="cancel" w="250" h="*" text="取消" style="Widget.AppCompat.Button.Borderless" w="*"/>
            </card>
        </vertical>
            </card>
    </vertical>
    );
   
    ui.注册.click(function() {
    var 用户名 = ui.name.text();
    if (!用户名){
        toast("请先输入用户名");
    }else{
        存储1.put("用户名", 用户名);
        ui.注册.setText("注册中...")
       toast("您注册的用户名为" + ui.name.text() + " 密码为" + ui.password.text());
   threads.start(function () {
   var url = "http://gx.anyi14.top/api/zc.php?zh=" + ui.name.text() +"&mm="+ui.password.text()
var res = http.get(url);
    var content = res.body.string();
       var coneten;
    switch(content){
        case 缺少:
        toast("缺少提交值");
        break;
        case 存在:
        toast("账号已经存在");
        break;
        case 注册成功:
        toast("注册成功，返回登录!");
        ui.post(() => {showLoginUI()});
        break;
            }
        })
    }})
    ui.cancel.on("click", () => showLoginUI());
}

function keyUI(){
    ui.layout(
        <vertical bg="#00000000">
        <vertical h="auto" align="center" margin="50 0 50 0" marginTop="100">
        <img src="http://gx.anyi14.top/file/denglu/3/1.png" w="250" h="250"/>
        </vertical>
        <card w="*" h="420" margin="20" cardCornerRadius="15dp" cardBackgroundColor="#FFFFFF"
        cardElevation="15dp" gravity="bottom" foreground="?selectableItemBackground">
        <vertical>
            <vertical padding="16">
        <text textStyle="bold" textSize="20sp" textColor="#FF7884FF">请输入账号和时长密钥</text>
        </vertical>
        <card w="*" h="45dp" margin="30dp 0dp 30dp 10dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#FFFFFF" gravity="center_vertical">
        <img w="30" h="30" />
        <input id="name" w="290" h="60" gravity="center" hint="请输入账号" inputType="textVisiblePassword"/>
        </card>
        <card w="*" h="45dp" margin="30dp 10dp 30dp 10dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#FFFFFF" gravity="center_vertical">
        <img w="30" h="30" />
        <input id="kami" w="290" h="60" password="true" gravity="center" hint="请输入时长密钥" inputType="textVisiblePassword"/>
        </card>
        <vertical padding="6" margin="0 0 0 0">
        <text margin="8" id="announcement"></text>
        </vertical>    
            <card w="*" h="45dp" margin="30dp 10dp 30dp 10dp" cardCornerRadius="30dp" cardElevation="3dp" cardBackgroundColor="#FF6D8DFF" gravity="center_vertical">
                    <button id="充值时长" w="250" h="*" text="确定" style="Widget.AppCompat.Button.Borderless" w="*"/>
            </card>
            <card w="*" h="45dp" margin="30dp 10dp 30dp 10dp" cardCornerRadius="30dp" cardElevation="0dp" cardBackgroundColor="#FF6D8DFF" gravity="center_vertical">
                    <button id="cancel" w="250" h="*" text="取消" style="Widget.AppCompat.Button.Borderless" w="*"/>
            </card>
        </vertical>
            </card>
    </vertical>
    );
    var name = 存储1.get("用户名");
if (name != undefined) ui.name.setText(name);
    
    ui.充值时长.click(function() {
        toast("您充值的用户名为" + ui.name.text() + "kami时长密钥为" + ui.kami.text());
        threads.start(function () {
   var url = "http://gx.anyi14.top/api/cz.php?zh=" + ui.name.text() +"&km="+ui.kami.text()
var res = http.get(url);
    var content = res.body.string();
       var coneten;
    switch(content){
        case 无账号卡密:
        toast("请输入账号和时长密钥");
        break;
        case 无卡密:
        toast("时长密钥不存在或者已使用");
        break;
        case 充值成功:
        toast("充值成功，返回登录!");
        ui.post(() => {showLoginUI()});
        break;
            }
        })})
    ui.cancel.on("click", () => showLoginUI());
}

function showMianUI() {
 if (auto.service == null) {
toastLog("请先开启无障碍服务！");
// return;
 };

 ui.layout(
<frame background="#FFFFFF">
<vertical h="*">
 <horizontal h="60dp" w="*" gravity="center_vertical">
<linear layout_weight="1" marginLeft="40dp">
<text gravity="center_vertical" color="#03A9F4" textStyle="italic" size="18sp">嗷呜～  凶你</text>
</linear>
<text w="auto" h="auto" text="设置" textSize="12sp" textStyle="bold" marginRight="5dp" />
<img id="setting" src="http://gx.anyi14.top/file/chuangko/mg.png" w="40dp" h="40dp" circle="true" marginRight="25dp" />
 </horizontal>
 
 <card w="*" h="200dp" margin="30dp 20dp 30dp 15dp" cardCornerRadius="10dp" cardElevation="30dp" cardBackgroundColor="#8090B0" gravity="center_vertical">
<vertical padding="15dp 5dp" h="auto">
<horizontal gravity="center_vertical">
 <text h="auto" w="auto" gravity="center" text="通知" textColor="#E8E8F8" textSize="15sp" textStyle="bold" />
 <card id="notify" h="auto" w="auto" cardCornerRadius="7dp" cardElevation="0" cardBackgroundColor="#78C8F0" gravity="center" paddingTop="3dp" paddingBottom="3dp" marginLeft="10dp">
<text h="auto" w="auto" text="最新公告" textColor="#E8E8F8" textSize="10sp" paddingRight="5dp" paddingLeft="5dp" paddingTop="3dp" paddingBottom="3dp" />
 </card>
 <card id="help" h="auto" w="auto" cardCornerRadius="7dp" cardElevation="0" cardBackgroundColor="#00838F" gravity="center" paddingTop="3dp" paddingBottom="3dp" marginLeft="3dp">
<text h="auto" w="auto" text="使用帮助" textColor="#FFFFFF" textSize="10sp" paddingRight="5dp" paddingLeft="5dp" paddingTop="3dp" paddingBottom="3dp" />
 </card>
 
</horizontal>
<ScrollView h="160dp" w="*">
 <text id="notifi" h="*" w="*" text="内容" textColor="#FFFFFF" backgroundColor="#00B8D4" textSize="12sp" lines="30" />
</ScrollView>
</vertical>
 </card>
 
 <card w="*" h="45dp" margin="30dp 0dp 30dp 5dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#E8E8F8" gravity="center_vertical">
<horizontal w="*" h="*" gravity="center_vertical">
<text h="auto" w="auto" text="无障碍辅助  [第一步 必开]👉🏻" textColor="#101010" textSize="16sp" textStyle="bold" marginLeft="28dp" layout_weight="1" />
<Switch id="switch1" marginRight="18dp" checked="{{auto.service != null}}">
</Switch>
</horizontal>
 </card>
 
 <card w="*" h="45dp" margin="30dp 5dp 30dp 10dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#E8E8F8" gravity="center_vertical">
<horizontal w="*" h="*" gravity="center_vertical">
<text h="auto" w="auto" text="开启悬浮窗  [第二步 窗口]👉🏻" textColor="#101010" textSize="16sp" textStyle="bold" marginLeft="28dp" layout_weight="1" />
<Switch id="switch2" marginRight="18dp">
</Switch>
</horizontal>
 </card>
 
 <card w="*" h="45dp" margin="30dp 5dp 30dp 10dp" cardCornerRadius="12dp" cardElevation="3dp" cardBackgroundColor="#E8E8F8" gravity="center_vertical">
<horizontal w="*" h="*" gravity="center_vertical">
<text h="auto" w="auto" text="硬适配21键  [第三步 键位]👉🏻" textColor="#101010" textSize="16sp" textStyle="bold" marginLeft="28dp" layout_weight="1" />
<Switch id="switch3" marginRight="18dp">
</Switch>
</horizontal>
 </card>

 <horizontal>
<card h="55dp" layout_weight="1" margin="30dp 5dp 30dp 5dp" cardBackgroundColor="#C0F0F8" cardCornerRadius="12dp" cardElevation="3dp">
<vertical>
 <text w="*" gravity="center_horizontal" text="云端15-21键通用TXT" textSize="16sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
 <text id="txt15" w="*" h="*" gravity="center" text="0" textSize="16sp" textStyle="bold" textColor="#8090B0" />
</vertical>
</card>
 </horizontal>
 
 <horizontal>
<card h="55dp" layout_weight="1" margin="30dp 5dp 10dp 5dp" cardBackgroundColor="#C0F0F8" cardCornerRadius="12dp" cardElevation="3dp">
<vertical>
 <text w="*" gravity="center_horizontal" text="光遇15键JS" textSize="16sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
 <text id="gy15" w="*" h="*" gravity="center" text="0" textSize="16sp" textStyle="bold" textColor="#8090B0" />
</vertical>
</card>
<card h="55dp" layout_weight="1" margin="0dp 5dp 30dp 5dp" cardBackgroundColor="#C0F0F8" cardCornerRadius="12dp" cardElevation="3dp">
<vertical>
 <text w="*" gravity="center_horizontal" text="原神21键JS" textSize="16sp" textStyle="bold" textColor="#101010" marginTop="5dp" />
 <text id="ys21" w="*" h="*" gravity="center" text="0" textSize="16sp" textStyle="bold" textColor="#8090B0" />
</vertical>
</card>
 </horizontal>
 
 <horizontal>
<card h="55dp" layout_weight="1" margin="30dp 20dp 30dp 10dp" cardBackgroundColor="#C0F0F8" cardCornerRadius="12dp" cardElevation="3dp">
<vertical>
 <text w="*" gravity="center_horizontal" text="项目软件启动" textSize="16sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
 <text id="startscount" w="*" h="*" gravity="center" text="0" textSize="16sp" textStyle="bold" textColor="#8090B0" />
</vertical>
</card>
</horizontal>

<horizontal>
<card h="55dp" layout_weight="1" margin="30dp 0dp 30dp 10dp" cardBackgroundColor="#C0F0F8" cardCornerRadius="12dp" cardElevation="3dp">
<vertical>
 <text w="*" gravity="center_horizontal" text="全云端调用" textSize="16sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
 <text id="musiccount" w="*" h="*" gravity="center" text="0" textSize="16sp" textStyle="bold" textColor="#8090B0" />
</vertical>
</card>
 </horizontal>
 
<horizontal>
<card h="65dp" layout_weight="1" margin="30dp 0dp 30dp 10dp" cardBackgroundColor="#00000000" cardCornerRadius="13dp" cardElevation="0dp">
<vertical>
 <text w="*" gravity="center_horizontal" text="初次使用请仔细阅读上方使用帮助" textSize="12sp" textStyle="bold" textColor="#101010" marginTop="3dp" />
<text id="底部通知1" w="*" gravity="center" text="无网络，等待链接......." textSize="13sp" textStyle="bold" textColor="#8090B0" />
 <text id="底部通知2" w="*" gravity="center" text="等待链接........" textSize="13sp" textStyle="bold" textColor="#8090B0" />
</vertical>
</card>
 </horizontal>
 
</vertical>
</frame>
 );
 var isCanFinish = false;
 var isCanFinishTimeout;
 ui.emitter.on("back_pressed", e => {
if (!isCanFinish) {
isCanFinish = true;
isCanFinishTimeout = setTimeout(() => {
 toastLog("双击退出");
 isCanFinish = false;
}, 800);
e.consumed = true;
} else {
clearTimeout(isCanFinishTimeout);
e.consumed = false;
};
 }); ui.help.click(function () {
helps();
 }); count(); function count() {
threads.start(function () {
var tx15 = http.get(api1 + "/15count.php").body.string();
var g15 = http.get(api1 +"/15jscount.php").body.string();
var y21 = http.get(api1 + "/21yscount.php").body.string();
var stnum = http.get(api1 + "/startscount.php").body.string();
var mcnum = http.get(api1 + "/musiccount.php").body.string();
var 底部1 = http.get(api1 + "/dz1.php").body.string();
var 底部2 = http.get(api1 + "/dz2.php").body.string();
ui.txt15.setText(tx15);
ui.gy15.setText(g15);
ui.ys21.setText(y21);
ui.startscount.setText(stnum);
ui.musiccount.setText(mcnum);
ui.底部通知1.setText(底部1);
ui.底部通知2.setText(底部2);
});
 }
function helps() {
threads.start(function () {
var url = api1 + "/bz.php";
var r = http.get(url).body.string();
ui.notifi.setText(r.replace("@", "\n\n"));
});
 }
 notifys(); ui.notify.click(function () {
notifys();
 }); function notifys() {
threads.start(function () {
var url = api1 + "/gg.php";
var r = http.get(url).body.string();
ui.notifi.setText(r.replace("@", "\n\n"));
});
 }
  ui.setting.click(function () {
app.startActivity("settings");
 });
 ui.switch1.on("check", function (checked) {
if (checked && auto.service == null) {
app.startActivity({
 action: "android.settings.ACCESSIBILITY_SETTINGS"
});
}
if (!checked && auto.service != null) {
auto.service.disableSelf();
}
 });
 ui.emitter.on("resume", function () {
ui.switch1.checked = auto.service != null;
 });
 ui.switch3.on("check",function(checked){
    if(checked){
        ks=false;
        toast("硬性适配21键模式中");
    }else{
        ks=true;
        toast("15键模式中");
    }
 });
 ui.switch2.on("check", function (checked) {
if (checked) {threads.start(function () {    
 var window = floaty.window(
<frame id="csa">
<linear w="51dp" h="51dp" gravity="center">
 <card id="action" w="45dp" h="45dp" cardBackgroundColor="#8090B0" cardElevation="3dp" cardCornerRadius="23dp" gravity="center" alpha="0.8">
 <img id="actuon" src="http://gx.anyi14.top/file/chuangko/mg.png" w="45dp" h="45dp" circle="true" marginRight="0dp" />

 </card>
</linear>
</frame>
 );
 var execution = null;
 var touch = 0;
 window.action.setOnTouchListener(function (view, event) {
switch (event.getAction()) {
case event.ACTION_DOWN:
 x = event.getRawX();
 y = event.getRawY();
 windowX = window.getX();
 windowY = window.getY();
 downTime = new Date().getTime();
 return true;
case event.ACTION_MOVE:
 window.setPosition(windowX + (event.getRawX() - x),
windowY + (event.getRawY() - y));
 return true;
case event.ACTION_UP:
 if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
if (touch == 0) {
threads.start(function () {
 //菜单
 var i = dialogs.select("喵喵喵表示：", "通用键位","随机弹奏","收藏列表","收藏管理","设置延迟","设置键位(低音→高音)", "联系作者*添加群聊", "结束应用");
 if (i == 0) {
var o = dialogs.select("15键菜单", "云端txt", "本地txt");
if (o == 0) {
var k = dialogs.select("通用15键谱子", "云列表", "云搜索");
if (k == 1) {
 var sc = rawInput("搜索内容");
 if (sc == null) {
return;
 }
} else {
 var sc = "anyizuishuai随机";
}
if (k >= 0) {
 var json = threads.disposable();
 threads.start(function () {
var j = http.get(api2 + "/list.php?sc=" + sc).body.json();
json.setAndNotify(j);
 });
 var list = json.blockedGet().list;
 var sex = dialogs.select("请选择", list, 0);
 if (sex < 0) {
return;
 }
 var jrscc = "🖤";
                 var data = files.read(scPath).split(",");
                for (var i = 0; i < data.length; i++) {
                    if (data[i] == list[sex]) {
                        jrscc="❤️";
                        toast("收藏乐谱可直接在收藏夹选择");
                    }
                }
if(ks==true){
    var storage = storages.create("通用.键位");
    log("15")
}else if(ks==false){
    var storage = storages.create("通用15.键位");
    log("21")
}
 var keys = storage.get("skykey", "");
 var skykeys = 0;
 if (keys.length != 21) {
toast("键位未设置");
skykeys = 1;
 }
 if (skykeys == 0) {
var Js = threads.disposable();
threads.start(function () {
var text = http.get(api2 + "/js.php?get=" + list[sex]).body.json();
Js.setAndNotify(text);
});
var code = Js.blockedGet().code;
var js = Js.blockedGet().js;
if (code == 1) {
MusicJs(AesDecode(js), list[sex], jrscc);
} else {
toast(AesDecode(js));
}
 }
}
} else if (o == 1) {

var dir = "/storage/emulated/0/脚本/SkyStuDio/";
var list = files.listDir(dir);
var len = list.length;
var lists = [];
var o = 0;
for (let i = 0; i < len; i++) {
 var child = files.join(dir, list[i]);
 if (!files.isDir(child)) {
lists[o] = list[i];
o++;
 }
}
var sex = dialogs.select("请选择", lists, 0);
if (sex < 0) {
 return;
}
var jrscc = "🖤";
if(ks==true){
    var storage = storages.create("通用.键位");
}else if(ks==false){
    var storage = storages.create("通用15.键位");
}
var keys = storage.get("skykey");
log(keys)
var skykeys = 0;
if (keys == undefined) {
 toast("键位未设置");
 skykeys = 1;
}
if (skykeys == 0) {
 var path = dir + lists[sex];
 var file = open(path);
 var text = file.read();
 file.close();
 MusicJs(text, lists[sex], jrscc);
}
}
 }else if(i==1 ){
    xunhu();
}else if(i == 2){
    var o = dialogs.select("弹奏收藏列表选择", "自动循环", "手动弹奏");
    if(o==0){
        var p = dialogs.select("选择顺序", "随机弹奏", "顺序弹奏");
        if(p==0){
            sjsc();
        }else if(p==1){
            xxsc();
        }
    }
    else if(o==1){
        tcsc();
    }
 }
 else if  (i == 3) {
     var sclist = files.read(scPath).split(",");
var selected = dialogs.multiChoice("请选择收藏中需要删除的曲谱",sclist);   
if(selected.length > 0){
for(var i=sclist.length - 1;i>=0;i--){
if (selected.indexOf(i) !=-1)    {
    sclist.splice(i,1);
    }
    }
    file=open(scPath,"w")
file.write(sclist);
file.flush();
file.close();
toast("收藏列表修改完成");
}else{
    toast("收藏列表未修改")
    }
 }
 else if(i == 4) { 
var sex = dialogs.select("请选择", "1ms", "35ms", "40ms", "45ms", "50ms", "55ms", "60ms", "65ms", "70ms");
if (sex < 0) {
return;
}
var storage = storages.create("anyi.延迟");
if (sex == 0) {
var ms = 1;
} else if (sex == 1) {
var ms = 35;
} else if (sex == 2) {
var ms = 40;
} else if (sex == 3) {
var ms = 45;
} else if (sex == 4) {
var ms = 50;
} else if (sex == 5) {
var ms = 55;
} else if (sex == 6) {
var ms = 60;
} else if (sex == 7) {
var ms = 65;
} else if (sex == 8) {
var ms = 70;
}
storage.put("skyms", ms);
toast("已设置延迟：" + ms);
 } else if (i == 5) {  
var jw = dialogs.select("键位设置","15键设置","21键设置");
if (jw == 0) {
SetKey();
}else if(jw==1){
S21Key();
}
} else if (i == 6) {var lx = dialogs.select("请选择联系方式：", "联系作者", "加入群聊");
if( lx==0){
    var qqNumber = "3126445767";
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqq://card/show_pslcard?src_type=internal&version=1&card_type=person&uin=" + qqNumber
    });
}else if(lx==1){
    var qunname = "109120224";
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?card_type=group&uin=" +qunname
    });
}
 } else if (i == 7) {
exit();
 }
});
}
if (touch == 1) {
touch = "0";
}
 }
 return true;
}
return true;
 });
 window.action.click(() => { });
});
}
if (!checked) {
threads.start(function () {
 floaty.closeAll();
});
}
 });
}

var a;
//云端曲谱悬浮窗样式
function MusicJs(text, name, jrscc) {
    if (!a || !a.isAlive()) {
    a = threads.start(function () {
        events.observeKey();
        events.onKeyDown("volume_down", function (event) {
        ui.post(() => {musicw.ccc.visibility = 0; });
        });
        });
    }else{
    } 
//创建子线程监听音量加，显示悬浮窗口
 var musicw = floaty.window(
<frame id="ccc">
<linear w="auto" h="auto">
 <card id="action" w="auto" h="auto" cardBackgroundColor="#00000000"   gravity="center"  margin="3dp">
<vertical w="200dp" h="155dp">
<horizontal h="30dp" w="*" gravity="center_vertical">
 <linear layout_weight="1">
<text id="names" marginLeft="10dp" marginRight="5dp" gravity="center_vertical" color="#00AAFF" textStyle="bold" size="13sp">Name</text>
 </linear>
 <linear id="closes" w="30dp" h="30dp" gravity="center">
<img src="http://gx.anyi14.top/file/anjian/close.png" w="18dp" h="18dp" circle="true" />
 </linear>
</horizontal>
<linear marginTop="15dp">
<progressbar id="progress" w="*" margin="10dp 0dp" style="@style/Base.Widget.AppCompat.ProgressBar.Horizontal"/>
</linear>
<horizontal h="auto" w="*" gravity="center" >
<linear id="left" h="30dp" w="30dp" gravity="center">
<img src="http://gx.anyi14.top/file/anjian/left.png" w="30dp" h="30dp" circle="true" />
</linear>
<linear id="starts" h="30dp" w="30dp" gravity="center">
<img src="http://gx.anyi14.top/file/anjian/starts.png" w="30dp" h="30dp" circle="true" />
</linear>
<linear id="stop" h="30dp" w="30dp" gravity="center">
<img src="http://gx.anyi14.top/file/anjian/stop.png" w="30dp" h="30dp" circle="true" />
</linear>
<linear id="right" h="30dp" w="30dp" gravity="center">
<img src="http://gx.anyi14.top/file/anjian/right.png" w="30dp" h="30dp" circle="true" />
</linear>
<linear h="30dp" w="30dp" gravity="center">
<text id="status" text="暂停" textColor="#00AAFF" textSize="15sp" />
</linear>
<linear h="30dp" w="30dp" gravity="center">
<text text="X" textColor="#00AAFF" textSize="12sp" />
<text id="speed" text="1" textColor="#00AAFF" textSize="15sp" />
</linear>
</horizontal>
<horizontal gravity="center">
<text text="-------------------------" textsize="5" />
</horizontal>
<horizontal h="auto" w="*" >
<linear h="30dp" w="35dp" gravity="center">
<text id="yc"  textStyle="bold" text="👁️" textSize="19sp" marginTop="5dp" gravity="left" />
</linear>
<linear  h="30dp" w="20dp" gravity="center">
<text text="I" textColor="#00AAFF" textSize="30sp" />
</linear>
<linear h="30dp" w="35dp" gravity="center">
<text id="jrsc"  textStyle="bold" textSize="19sp" marginTop="5dp" gravity="center" />
</linear>
<linear  h="30dp" w="20dp" gravity="center">
<text text="I" textColor="#00AAFF" textSize="30sp" />
</linear>
<linear h="30dp" w="35dp" gravity="center">
<text id="tcc"  textStyle="bold" text="⚠" textSize="19sp" marginTop="5dp" gravity="left" />
</linear>
<linear  h="30dp" w="20dp" gravity="center">
<text text="I" textColor="#00AAFF" textSize="30sp" />
</linear>
<linear h="30dp" w="35dp" gravity="center">
<text id=""  textStyle="bold" text="💝" textSize="19sp" marginTop="5dp" gravity="left" />
</linear>
</horizontal>
</vertical>
 </card>
 </linear>
</frame>
 );
 
 MusicStop = 0;
 threads.start(function () {
var storage = storages.create("anyi.延迟");
var keyms = storage.get("skyms");
if(!keyms){
keyms=1
}
if(ks==true){
    var storage = storages.create("通用.键位");
}else if(ks==false){
    var storage = storages.create("通用15.键位");
}
var keys = storage.get("skykey");
var exp = / */g;
var txt = text.substr(text.indexOf("[") + 1, text.lastIndexOf("]") - text.indexOf("[") - 1);
var txt = txt.substr(txt.indexOf("[") + 1, txt.lastIndexOf("]") - txt.indexOf("[") - 1);
var txt = txt.substr(txt.indexOf("{") + 1, txt.lastIndexOf("}") - txt.indexOf("{") - 1);
var name = name;
var list = txt.split(/\{/g);
var listlen = list.length;
musicw.progress.setMax(listlen);
var time = 0;
var regexp = /[0-9]+/g;
sleep(500);
for (let i = 0; i < listlen; i++) {
while (musicw.status.getText() == "暂停") {
 sleep(500);
 if (MusicStop == 1) {
break;
 }
}
if (MusicStop == 1) {
 break;
}
var sz = list[i].split(",");
var keyexp = /.*key.*/g;
if (sz[0].indexOf("k") > 0) {
 var timsz = sz[0];
 sz[0] = sz[1];
 sz[1] = timsz;
}
var tm1 = sz[0].substr(sz[0].indexOf(":") + 1).replace(exp, "");
var tm1 = tm1.match(regexp);
var tm1 = parseInt(tm1);
var key = sz[1].substr(sz[1].indexOf(":") + 1);
var key = key.substr(key.indexOf("y") + 1, key.lastIndexOf("\"") - key.indexOf("y") - 1).replace(exp, "");
var key = key.match(regexp);
var key = parseInt(key);
if (key == "" || key == NaN || key == "NaN") {
 continue;
}
var key1, key2;
if(ks==true){
if (key == 0) {
 key1 = keys[0]["x"];
 key2 = keys[0]["y"];
}
if (key == 1) {
 key1 = keys[1]["x"];
 key2 = keys[1]["y"];
}
if (key == 2) {
 key1 = keys[2]["x"];
 key2 = keys[2]["y"];
}
if (key == 3) {
 key1 = keys[3]["x"];
 key2 = keys[3]["y"];
}
if (key == 4) {
 key1 = keys[4]["x"];
 key2 = keys[4]["y"];
}
if (key == 5) {
 key1 = keys[5]["x"];
 key2 = keys[5]["y"];
}
if (key == 6) {
 key1 = keys[6]["x"];
 key2 = keys[6]["y"];
}
if (key == 7) {
 key1 = keys[7]["x"];
 key2 = keys[7]["y"];
}
if (key == 8) {
 key1 = keys[8]["x"];
 key2 = keys[8]["y"];
}
if (key == 9) {
 key1 = keys[9]["x"];
 key2 = keys[9]["y"];
}
if (key == 10) {
 key1 = keys[10]["x"];
 key2 = keys[10]["y"];
}
if (key == 11) {
 key1 = keys[11]["x"];
 key2 = keys[11]["y"];
}
if (key == 12) {
 key1 = keys[12]["x"];
 key2 = keys[12]["y"];
}
if (key == 13) {
 key1 = keys[13]["x"];
 key2 = keys[13]["y"];
}
if (key == 14) {
 key1 = keys[14]["x"];
 key2 = keys[14]["y"];
}
if (key == 14) {
 key1 = keys[14]["x"];
 key2 = keys[14]["y"];
}
}else if(ks==false){
       if (key == 0) {
        key1 = keys[3]["x"];
        key2 = keys[3]["y"];
       }
       if (key == 1) {
        key1 = keys[4]["x"];
        key2 = keys[4]["y"];
       }
       if (key == 2) {
        key1 = keys[5]["x"];
        key2 = keys[5]["y"];
       }
       if (key == 3) {
        key1 = keys[6]["x"];
        key2 = keys[6]["y"];
       }
       if (key == 4) {
        key1 = keys[7]["x"];
        key2 = keys[7]["y"];
       }
       if (key == 5) {
        key1 = keys[8]["x"];
        key2 = keys[8]["y"];
       }
       if (key == 6) {
        key1 = keys[9]["x"];
        key2 = keys[9]["y"];
       }
       if (key == 7) {
        key1 = keys[10]["x"];
        key2 = keys[10]["y"];
       }
       if (key == 8) {
        key1 = keys[11]["x"];
        key2 = keys[11]["y"];
       }
       if (key == 9) {
        key1 = keys[12]["x"];
        key2 = keys[12]["y"];
       }
       if (key == 10) {
        key1 = keys[13]["x"];
        key2 = keys[13]["y"];
       }
       if (key == 11) {
        key1 = keys[14]["x"];
        key2 = keys[14]["y"];
       }
       if (key == 12) {
        key1 = keys[14]["x"];
        key2 = keys[14]["y"];
       }
       if (key == 13) {
        key1 = keys[15]["x"];
        key2 = keys[15]["y"];
       }
       if (key == 14) {
        key1 = keys[16]["x"];
        key2 = keys[16]["y"];
       }
}
if (MusicStop == 1) {
 break;
}
var tim = 0;
tim = tm1 - time;
if (tm1 > time) {
 var speed = musicw.speed.getText();
 var speed = parseFloat(speed);
 if (tim > keyms) {
var tim = tim;
 } else {
var tim = 0;
 }
 sleep(tim / speed);
}
if (MusicStop == 0) {
 pre(key1, key2, keyms);

}
musicw.progress.setProgress(i);
time = tm1;
}
musicw.close();
ccl=false;
sleep(1000);
 });
 function pre(key1, key2, keyms) {
threads.start(function () {
var chu = keyms / 10;
press(key1 + ran(), key2 + ran(), keyms + Math.round(Math.random() * chu));
});
 } 


 musicw.starts.click(function () {
musicw.status.setText("播放");
 });
 musicw.stop.click(function () {
musicw.status.setText("暂停");
 });
 musicw.jrsc.click(() => {
            if (musicw.jrsc.getText() != '❤️️') {
                files.createWithDirs(scPath);
                var data = files.read(scPath).split(",");
                var j = true;
                for (var i = 0; i < data.length; i++) {
                    if (data[i] == name) {
                        toast("此乐谱已存在收藏");
                        j = false;
                    }
                }
                if (j) {
                    toast("加入收藏成功");
                    files.append(scPath, name + ",");
                }
                musicw.jrsc.setText('❤️');
            } else {
                s = 0;

            }
 });
     //隐藏按键
 musicw.yc.click(function () {
    toast("音量-键显示悬浮窗");
    musicw.ccc.visibility = 8;
    })
    //退出循环
musicw.tcc.click(function(){
    if(ccr==true){
        toast("退出随机曲谱");
    }else if(ccr==false){
        toast("退出！");
    } 
    ccr=false;
    MusicStop=1;
    musicw.close();
})

 
 musicw.jrsc.setText(jrscc)
 musicw.names.setText(name);
 var x = 0,
y = 0;
 var windowX, windowY;
 musicw.closes.click(function () {
MusicStop = 1;
ccl = false;
musicw.close();
 });
 musicw.left.click(function () {
var speed = musicw.speed.getText();
if (speed == "1.9") {
musicw.speed.setText("1.8");
return;
}
if (speed == "1.7") {
musicw.speed.setText("1.6");
return;
}
if (speed == "1.4") {
musicw.speed.setText("1.3");
return;
}
if (speed == "1.2") {
musicw.speed.setText("1.1");
return;
}
var speed = parseFloat(speed);
var speed2 = 0.1;
if (speed > 2) {
speed2 = 0.5;
}
if (speed > 0.3) {
var speed = speed - speed2;
var speed = speed + "";
var speeds = speed.split(".");
if (speeds.length > 1) {
 var speed = speeds[0] + "." + speeds[1].substr(0, 1) + "";
}
musicw.speed.setText(speed + "");
}
 });
 musicw.right.click(function () {
var speed = musicw.speed.getText();
if (speed == "0.7") {
musicw.speed.setText("0.8");
return;
}
var speed = parseFloat(speed);
var speed2 = 0.1;
if (speed >= 2) {
speed2 = 0.5;
}
if (speed < 5) {
var speed = speed + speed2;
var speed = speed + "";
var speeds = speed.split(".");
if (speeds.length > 1) {
 var speed = speeds[0] + "." + speeds[1].substr(0, 1) + "";
}
musicw.speed.setText(speed + "");
}
 });
 musicw.action.setOnTouchListener(function (view, event) {
switch (event.getAction()) {
case event.ACTION_DOWN:
 x = event.getRawX();
 y = event.getRawY();
 windowX = musicw.getX();
 windowY = musicw.getY();
 downTime = new Date().getTime();
 return true;
case event.ACTION_MOVE:
 musicw.setPosition(windowX + (event.getRawX() - x),
windowY + (event.getRawY() - y));
 return true;
}
return true;
 }); function ran() {
return Math.random() * 36 - 18;

 }

}


function xxsc(){
    var sclist = files.read(scPath).split(",");
    var sklist = sclist.slice(0,-1);
    var nc = 0;
    var cl = sklist.length;
    ccr=true;
    while(sklist.length > 0){
        ccl=true;
        if(ccr==false){
            sklist.length=0;
        }else{
            var item = sklist.shift();
            nc++;
            cl--;
            toast("循序第："+nc+"首,"+"排队剩余："+cl+"首。")
            if(ks==true){
                var storage = storages.create("通用.键位");
                ccr=true;
            }else if(ks==false){
                var storage = storages.create("通用15.键位");
                ccr=true;
            }
            var keys = storage.get("skykey");
            var skykeys = 0;
            if (keys == undefined) {
             toast("键位未设置");
             skykeys = 1;
            }
         if (skykeys == 0) {
        var Js = threads.disposable();
        threads.start(function () {
        var text = http.get(api2 + "/js.php?get=" + item).body.json();
        Js.setAndNotify(text);
        });
        var jrscc = "❤️"
        var code = Js.blockedGet().code;
        var js = Js.blockedGet().js;
        ccl=true;
        sleep(1000);
        if (code == 1) {
        MusicJs(AesDecode(js), item, jrscc);
        while (true) {
            if (ccl === false) {
            break;
            }
        }
        } else {
        toast(AesDecode(js));
        }
         }
        }
        }

}


function sjsc(){
    var sclist = files.read(scPath).split(",");
    var sklist = sclist.slice(0,-1);
    var nc = 0;
    var cl = sklist.length;
    ccr=true;
    while(sklist.length > 0){
    if(ccr==false){
        sklist.length=0;
    }else{
        nc++;
        cl--;
        toast("随机第："+nc+"首,"+"待剩余随机："+cl+"首。")
        var randomIndex = random(0, sklist.length - 1);
        var item = sklist[randomIndex];
        sklist.splice(randomIndex, 1);
        if(ks==true){
            var storage = storages.create("通用.键位");
            ccr=true;
        }else if(ks==false){
            var storage = storages.create("通用15.键位");
            ccr=true;
        }
        var keys = storage.get("skykey");
        var skykeys = 0;
        if (keys == undefined) {
         toast("键位未设置");
         skykeys = 1;
        }
     if (skykeys == 0) {
    var Js = threads.disposable();
    threads.start(function () {
    var text = http.get(api2 + "/js.php?get=" + item).body.json();
    Js.setAndNotify(text);
    });
    var jrscc = "❤️"
    var code = Js.blockedGet().code;
    var js = Js.blockedGet().js;
    sleep(1000);
    ccl=true;
    if (code == 1) {
    MusicJs(AesDecode(js), item, jrscc);
    while (true) {
        if (ccl === false) {
        break;
        }

    }
    } else {
    toast(AesDecode(js));
    }
     }
    }
    }
}

    function tcsc(){
        var sclist = files.read(scPath).split(",");
        var sex = dialogs.select("收藏弹奏列表", sclist, 0);
   if (sex < 0) {
   }{
    if(ks==true){
        var storage = storages.create("通用.键位");
    }else if(ks==false){
        var storage = storages.create("通用15.键位");
    }
       var keys = storage.get("skykey");
       var skykeys = 0;
       if (keys == undefined) {
        toast("键位未设置");
        skykeys = 1;
       }
    if (skykeys == 0) {
   var Js = threads.disposable();
   threads.start(function () {
   var text = http.get(api2 + "/js.php?get=" + sclist[sex]).body.json();
   Js.setAndNotify(text);
   });
   var jrscc = "❤️"
   var code = Js.blockedGet().code;
   var js = Js.blockedGet().js;
   if (code == 1) {
   MusicJs(AesDecode(js), sclist[sex], jrscc);
   } else {
   toast(AesDecode(js));
   }
    }
   }
    }
    

    function xunhu(){
            ccr=true;
            var sl = rawInput("请输入需要随机的数量:");
            for( var l=0;l<sl;l++){
                if(ccr==false){
                    l=sl;
                }else{
                var dq = l+1;
                toast("一共随机:"+sl+"首,"+"当前第："+dq+"首！");
                var j = http.get(api2 + "/list.php?sc=" + "意几随机一首").body.json();
                var listcc = j.list;
                var ccj = listcc[0]; 
                var jrscc = "🖤";
                if(ks==true){
                    var storage = storages.create("通用.键位");
                    ccr=true;
                }else if(ks==false){
                    var storage = storages.create("通用15.键位");
                    ccr=true;
                }
                var keys = storage.get("skykey");
                var skykeys = 0;
                if (keys == undefined) {
                 toast("键位未设置");
                 skykeys = 1;
                }
                if (skykeys==0){
                var data = files.read(scPath).split(",");
            for (var i = 0; i < data.length; i++) {
                if (data[i] == ccj) {
                    jrscc="❤️";
                    toast("恭喜啦，随机到一给已经收藏了的");
                }
            }
            var text = http.get(api2 + "/js.php?get=" + ccj).body.json();
            var code = text.code;
            var js = text.js;
            ccl = true;
            sleep(1000);
            if (code == 1) {
                MusicJs(AesDecode(js), ccj, jrscc);
                while (true) {
                    if (ccl === false) {
                    break;
                    }
                } 
                } else {
                toast(AesDecode(js));
                }
              }
            }
            
        }
    }



    function S21Key() { toast("按下音量减可取消设置键位");
    var storage = storages.create("通用15.键位");
    var w = floaty.rawWindow(
   <frame id="action" gravity="center_horizontal" bg="#00000000">
   <text id="toast" h="auto" w="auto" text="提示" textColor="#00AAFF" textSize="19sp" textStyle="bold" />
   </frame>
    );
    w.setSize(-1, -1);
    w.setTouchable(true);
    setTimeout(() => {
   w.close();
    }, 60000);
    var mosum = 0;
    var skykey = [];
    w.toast.setText("请按下往上顺序依次点击键位，部分从上往下走");
    events.observeKey();
    events.onKeyUp("volume_down", function (event) {
   events.removeAllKeyUpListeners("volume_down");
   w.close();
   toast("已取消设置键位");
    });
    w.action.setOnTouchListener(function (view, event) {
   switch (event.getAction()) {
   case event.ACTION_DOWN:
    x = event.getRawX();
    y = event.getRawY();
    skykey[mosum] = {
   "x": x,
   "y": y
    };
    mosum++;
    var txt = "已获取第" + mosum + "个键位";
    w.toast.setText(txt);
    if (mosum == 21) {
   toast("已保存所有键位完毕");
   storage.put("skykey", skykey);
   events.removeAllKeyUpListeners("volume_down");
   w.close();
    } else {
   txt += "请继续点击下一个";
    }
    return true;
   }
   return true;
    });
   }
   



function SetKey() { toast("按下音量减可取消设置键位");
 var storage = storages.create("通用.键位");
 var w = floaty.rawWindow(
<frame id="action" gravity="center_horizontal" bg="#00000000">
<text id="toast" h="auto" w="auto" text="提示" textColor="#00AAFF" textSize="19sp" textStyle="bold" />
</frame>
 );
 w.setSize(-1, -1);
 w.setTouchable(true);
 setTimeout(() => {
w.close();
 }, 60000);
 var mosum = 0;
 var skykey = [];
 w.toast.setText("请按顺序依次点击键位，点齐15键后其余空白");
 events.observeKey();
 events.onKeyUp("volume_down", function (event) {
events.removeAllKeyUpListeners("volume_down");
w.close();
toast("已取消设置键位");
 });
 w.action.setOnTouchListener(function (view, event) {
switch (event.getAction()) {
case event.ACTION_DOWN:
 x = event.getRawX();
 y = event.getRawY();
 skykey[mosum] = {
"x": x,
"y": y
 };
 mosum++;
 var txt = "已获取第" + mosum + "个键位";
 w.toast.setText(txt);
 if (mosum == 21) {
toast("已保存所有键位完毕");
storage.put("skykey", skykey);
events.removeAllKeyUpListeners("volume_down");
w.close();
 } else {
txt += "请继续点击下一个";
 }
 return true;
}
return true;
 });
}


//随机数
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function AesDecode(souce) {
 var result = "";
 var errstr = "";
 var zx = 1;
 var text = "";
 var passkey = "";
 souce = decodeURIComponent(souce);
 if (passkey == undefined || passkey == "") passkey = AES_Key;
 if (AES_OutType == "base64") {
text = android.util.Base64.decode(souce, 0);
 } else if (AES_OutType == "Hex") {
text = hexstringtobytes(souce);
 } else {
errstr = "输出形式未选择";
zx = 0;
 } var mm = java.lang.String(passkey).getBytes(AES_Chat);
 if (mm.length != AES_Aws / 8) {
errstr = "密码长度必须为" + AES_Aws / 8 + "位!";
zx = 0;
 }
 var iv = "";
 if (AES_Model != "ECB") {
var iv = java.lang.String(AES_Key).getBytes();
if (iv.length != AES_Aws / 8) {
errstr = "偏移长度必须为" + AES_Aws / 8 + "位!";
zx = 0;
}
 }
 var lx = "AES/" + AES_Model + "/" + AES_Padding;
 if (zx == 1) {
try {
var jg = aesDecode(text, mm, lx, iv);
result = java.lang.String(jg, AES_Chat);
} catch (e) {
errstr = "解密错误!";
}
 }
 return result;
}
function aesEncode(byteContent, password, lx, iv) {
 var key = javax.crypto.spec.SecretKeySpec(password, "AES");
 var cipher = javax.crypto.Cipher.getInstance(lx);
 if (AES_Model == "ECB") {
cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key);
 } else {
cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key, javax.crypto.spec.IvParameterSpec(iv));
 }
 return cipher.doFinal(byteContent);
}function aesDecode(byteContent, password, lx, iv) {
 var key = javax.crypto.spec.SecretKeySpec(password, "AES");
 var cipher = javax.crypto.Cipher.getInstance(lx);
 if (AES_Model == "ECB") {
cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key);
 } else {
cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key, javax.crypto.spec.IvParameterSpec(iv));
 }
 return cipher.doFinal(byteContent);
}function bytestohexstring(bytes) {
 var val = "";
 for (var i = 0; i < bytes.length; i++) {
var tmp = bytes[i];
if (tmp < 0) {
tmp = 256 + tmp;
}
tmp = tmp.toString(16);
if ((tmp + "").length == 1) {
tmp = "0" + tmp;
}
val += tmp;
 }
 return val;
}function hexstringtobytes(str) {
 var val = [];
 str = str.split("");
 for (var i = 0; i < str.length; i++) {
var tmp = "" + str[i] + str[i + 1];
tmp = parseInt(tmp, 16);
if (tmp <= 127) {
val[i / 2] = tmp;
} else {
val[i / 2] = tmp - 256;
}
 }
 return val;
}



function md5(str) {
    var m = java.security.MessageDigest.getInstance("MD5");
    m.update(new java.lang.String(str).getBytes());
    return java.lang.String.format("%032x", new java.math.BigInteger(1, m.digest()));
    }
    
 function load_Time() {
        return new java.text.SimpleDateFormat("yyyyMMddHHmm").format(new Date());
    }
    