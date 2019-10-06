//immediately-invoked function
//1-tanımlanmayan anında çağrılan immediately-invoked
!(function (){ 
    console.log("izle ve öğren")
 })();

 //2 tanımlanan anında çağıran fonksiyon
var foobar= function(){
    arguments.callee();
}

(function (){
        var i=0;
        var name= "DefaultName"+i;
        i=i+1;
        return name;
        
})();
    var name= createName();
    name2=createName();
    console.log(name + " "+name2);

(function IIFE(msg,times){
    for(var i=1;i<=times;i++)
      {
        console.log(msg);
      }           
                       
    }("Merhaba!", 5));

               //  NAMESPACE KULLANIMI////
function user()
{
    this.yas = 25;
}
user.prototype.getYas= function()
{
    return this.yas;
}
//->ŞİMDİ DAHA YÖNETİLEBİLİR OLACAK


if(!UserNamespace) UserNamespace = {};
UserNamespace.user = function() 
{
    this.yas = 24;
};
UserNamespace.user.prototype.getYas = function()
{
    return this.yas;
};


var u = new UserNamespace.user()
alert( u.getYas() );








