let inputForm, todoMain, tabButton,sortMenu

// DOMを変数に登録
function registerDom() {
  inputForm = document.querySelector("#input-form")
  todoMain = document.querySelector("#todo-main")
  tabButton = document.querySelector("#tab").querySelectorAll("button")
  sortMenu = document.querySelectorAll("#sort-menu")
}

// 初期化 関数の呼び出し
function initialize() {
  registerDom()
  bindEvents()
}

document.addEventListener("DOMContentLorded", initialize.bind(this))

// DOMにイベントを設定
/* フォームタグで登録ボタンをクリックしたらhandle関数を実行せよ */
function bindEvents() {
  inputForm.addEventListener("submit", () => handleSubmit())
}

/* Todoを登録する処理 */
function handleSubmit(event) {
  // ページ遷移を止める
  event.preventDefault()
  const todoObj = {
    text: inputForm["input-text"].value
  }
  addTodo(todoObj)
}