(function () {
    window.CHAT = {
        msgObj: document.getElementById("message"),
        username : null,
        //实现登录功能
        usernameSubmit: function () {
            var username = document.getElementById("username").value;
            if(username != ""){
                document.getElementById("username").value = "";
                document.getElementById("loginbox").style.display = "none";
                document.getElementById("chatbox").style.display = "block";
                this.init(username);
            }
            return false;
        },
        //退出功能实现
        logout:function () {
            location.reload();
        },
        init:function (username) {
            this.username = username;
            document.getElementById("showusername").innerHTML = this.username;
        }
    }
})();