//ButtonController
var ButtonController = (function(){
    //expence funtcion
var expence = function(id,decprition,val){
this.id=id;
this.decprition=decprition;
this.val=val;

}
//income function
var income = function(id,decprition,val){
    this.id=id;
    this.decprition=decprition;
    this.val=val;
    
    }

    //data expence and income 
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
       
    };
    
    
    return {
        //new item add which will be add in income and expence
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //uniqe id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            
            if (type === 'exp') {
                newItem = new expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new income(ID, des, val);
            }
            
         
            data.allItems[type].push(newItem);
            
          
            return newItem;
        },
          testing:function(){

            console.log(data);
          }
    }
       
})();

//Ui controller 
var UiController = (function(){
var DomeString={


}
return{
  getinput: function(){
  return{
  Type: document.querySelector('.add__type').value,
  decription: document.querySelector('.add__description').value,
  value:document.querySelector('.add__value').value

  };

 },

 AddNewItemInTHeList: function(obj,type){
 var html,newhtml,element;
if(type=='inc'){
    element='.income__list';

    html='<div class="item clearfix" id="income-%id%"><div class="item__description">%decription%</div><div class="right clearfix"> <div class="item__value">%val%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>  </div></div></div>'

}else if(type=='exp'){
     element='.expenses__list';
    html= ' <div class="item clearfix" id="expense-%id%"><div class="item__description">%decription%</div><div class="right clearfix">  <div class="item__value">%val%</div><div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
}
   
newhtml=html.replace('%id%',obj.id);
newhtml=html.replace('%decription%',obj.decription);
newhtml=html.replace('%val%',obj.val);
document.querySelector(element).insertAdjacentHTML('beforeend',newhtml);
 },

};


})();

//Add clicke 
var AddclickButton= (function(BtnCntrl,Uicntrl){
 


    var setUpEventListener=function(){

        document.querySelector('.add__btn').addEventListener('click',Newfnct);

        document.addEventListener('keypress',function(el){
        if(el.keyCode===13 || el.which===13){
          Newfnct();
        }
        
        });
        
    }
var Newfnct= function(){

var seeFunction=Uicntrl.getinput();
console.log(seeFunction);
var newItems=BtnCntrl.addItem(seeFunction.Type,seeFunction.Decription,seeFunction.value);
UiController.AddNewItemInTHeList(newItems,seeFunction.Type);

};

return{
    inti:function(){
       console.log('Still work');
       setUpEventListener();

    }
}







})(ButtonController,UiController);




AddclickButton.inti();


