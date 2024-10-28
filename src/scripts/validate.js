import { arrSpanError, keyFormData, regexPattern } from "./constants.js";
import IMask from 'imask';


const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const phone = document.querySelector('.form__input-phone')
const spanEmailError =  document.querySelector('.form__input-email_error')


const mask = new IMask(phone,{
  mask: "+{375}(00)000-00-00"
})

function f(className) {
  for (const element of arrErrors) {
    if(element.className === className) {
      return true
    }
    
  }
  return false

}


export function validateForm(formData) {
  let flag = true

  const nodes = formData.children;
  const spanError = document.createElement('span');

  for (const node of nodes) {
    if(node.classList.contains('form__input')) {
      if(node.classList.contains('form__input-email')) {
        
        if(node.value && emailPattern.test(node.value)){
          node.classList.remove('from__error')
          spanEmailError.textContent = ""
        }
        else {
          node.classList.add('from__error')
          spanEmailError.textContent = "Введите коректный email"
          flag = false
        }
      }
      else if(node.classList.contains('form__input-phone')) {
        if(mask.masked.isComplete){
          const  spanError = node.nextElementSibling
          spanError.textContent = ""
          node.classList.remove('from__error')
        }
        else {
          const  spanError = node.nextElementSibling
          spanError.textContent = "Введите данные"
          node.classList.add('from__error')
          flag = false
        }
      }

      else if(!node.value){
        const  spanError = node.nextElementSibling
        spanError.textContent = "Введите данные"
        node.classList.add('from__error')
        flag = false
      }
      else {
        const  spanError = node.nextElementSibling
        spanError.textContent = ""
        node.classList.remove('from__error')
        
      }
      
    }
      
  }
  return flag

}

