import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addToIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const addToIncompleteList = (text) => {
  // liタグを生成する
  const li = document.createElement("li");

  // pタグを生成し、テキストボックスの値をあてる
  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);

    const addTarget = completeButton.parentNode;
    const targetText = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const p = document.createElement("p");
    p.innerText = targetText;

    // 戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const targetText = backButton.parentNode.firstChild.innerText;
      addToIncompleteList(targetText);
    });

    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(li);
  });

  // 削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // liタグの子要素に各要素を設定する
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
