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
  // 入力文字の代入
  const todoObj = {
    text: inputForm["input-text"].value
  }
  // 詳細情報の作成
  addTodo(todoObj)
}

// todoObjを格納する処理
const todoList = []

function addTodo(todoObj) {
  // ユニークなID
  todoObj.id = "todo-" + (todoList.length + 1)

  // 作成日
  todoObj.createAt = newDate().todoLocalString()

  // 優先度
  todoObj.primary = 3

  // 完了フラグ
  todoObj.isDone = false

  // 編集フラグ
  todoObj.isEdit = false

  // todoList配列の先頭に挿入する
  todoList.unshift(todoObj)

  
}