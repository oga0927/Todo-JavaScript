let inputForm, todoMain, tabButton,sortMenu

// DOMを変数に登録
function registerDom() {
  inputForm = document.querySelector("#input-form")
  todoMain = document.querySelector("#todo-main")
  tabButton = document.querySelector("#tab").querySelectorAll("button")
  sortMenu = document.querySelectorAll("#sort-menu")
}

// 初期化
function initialize() {
  registerDom()
}

document.addEventListener("DOMContentLorded", initialize.bind(this))