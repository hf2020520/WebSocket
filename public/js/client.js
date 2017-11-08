(function () {
    window.CHAT = {
        //实现登录功能
        usernameSubmit: function () {
            var username = document.getElementById("username").value;
            if(username != ""){
                document.getElementById("username").value = "";
                document.getElementById("loginbox").style.display = "none";
                document.getElementById("chatbox").style.display = "block";
            }
            return false;
        }
    }
})();