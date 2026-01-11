
//Main Site
function ball1(){
    document.getElementById('num1').classList.remove('num1')
    document.getElementById('num1').classList.add('big')
    document.getElementById('text1').classList.add('show')
}
function ball2(){
    document.getElementById('num2').classList.remove('num2')
    document.getElementById('num2').classList.add('big')
    document.getElementById('text2').classList.add('show')
}
function ball3(){
    document.getElementById('num3').classList.remove('num3')
    document.getElementById('num3').classList.add('big')    
    document.getElementById('text3').classList.add('show')
}
function ball4(){
    document.getElementById('num4').classList.remove('num4')
    document.getElementById('num4').classList.add('big')
    document.getElementById('text4').classList.add('show')
    // document.getElementById('btn4').classList.toggle('hide')
}
document.getElementById('num1').addEventListener('mouseover', ball1)
document.getElementById('num2').addEventListener('mouseover', ball2)
document.getElementById('num3').addEventListener('mouseover', ball3)
document.getElementById('num4').addEventListener('mouseover', ball4)


function resetballs(){
    document.getElementById('num1').classList.remove('big')
    document.getElementById('num1').classList.add('num1')
    document.getElementById('text1').classList.remove('show')
    document.getElementById('text1').classList.add('hide')

    document.getElementById('num2').classList.remove('big')
    document.getElementById('num2').classList.add('num2')
    document.getElementById('text2').classList.remove('show')
    document.getElementById('text2').classList.add('hide')

    document.getElementById('num3').classList.remove('big')
    document.getElementById('num3').classList.add('num3')
    document.getElementById('text3').classList.remove('show')
    document.getElementById('text3').classList.add('hide')

    document.getElementById('num4').classList.remove('big')
    document.getElementById('num4').classList.add('num4')
    document.getElementById('text4').classList.remove('show')
    document.getElementById('text4').classList.add('hide')
}
document.getElementById('num1').addEventListener('mouseout',resetballs)
document.getElementById('num2').addEventListener('mouseout',resetballs)
document.getElementById('num3').addEventListener('mouseout',resetballs)
document.getElementById('num4').addEventListener('mouseout',resetballs)



