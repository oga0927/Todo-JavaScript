
// todoObjを格納する処理
const todoList = []
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
  updateTodoList()
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


/* todoの追加処理 */
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

  // HTMLを生成する
  updateTodoList()

  // フォームを初期化する
  clearInputForm()
}


// READ処理
TodoListの描画を更新する */
function updateTodoList() {
  //HTML文字列をプールする変数
  let htmlStrings = ""

  /**HTMLを書き換える */
  todoList.forEach(todo=> {
    // 新しいHTMLを出力
    htmlStrings += createTodoHtmlStrings(todo)
    todoMain.innerHTML = htmlStrings
  })
  todoMain.innerHTML = htmlStrings
}
// ここまで


// HTML文字列の生成

/**Todo1個単位のHTML文字列を作成する */
function createTodoHtmlStrings(todo) {
  // HTMLを文字列をプールする変数
  let htmlString = ""

  // HTMLのdata属性に設定する編集中を判定する内容
  const editType = todo.isEdit ? "editFixed" : "edit"

  // ボタンのラベルを編集中かどうかで分岐する
  const EditButtonLabel = todo.isEdit ? "編集完了" : "編集"

  // HTMLのdata属性に設定する完了したかどうかを判別する内容
  const doneButtonLabel = todo.isDone ?  "未完了" : "完了"

  // todoテキストが入るテーブルセルHTML文字列をプールする変数
  let priorityCell = ""
  
  // 編集中か、そうでないかで描画するHTMLを分岐する
  if (todo.isEdit) {
    // 該当のオブジェクトが編集中の場合はテキストフィールドを描画する
    // テキストフィールドなのでユーザーは文字や数値を変更できるようになる
    todoTextCell = 
    '<td class = "cell-text"<input class= "input-edit" type="text" value=' + todo.text + "/></td>"
  } else {
    // 通常時の状態
    // ユーザーは情報をみるだけなので普通のテキストで表示すればOK!
    todoTextCell = '<td class="cell-text">' + todo.text + "</td>"
    priorityCell = '<td class="cell-priority">' + todo.primary + "</td>"
  }
  aaa
}