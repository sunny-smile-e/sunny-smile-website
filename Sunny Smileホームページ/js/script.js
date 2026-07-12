// ==========================================================
// 会社ホームページ 共通スクリプト
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  // ---- モバイルナビゲーションの開閉 ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      var expanded = nav.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    // リンクをクリックしたらメニューを閉じる
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  // ---- お問い合わせフォームの簡易送信処理 ----
  // 現時点ではサーバー（送信先）が未接続のため、送信すると確認メッセージを表示します。
  // 実際にメールを受信できるようにするには、
  // 1) フォームサービス（例: Googleフォーム、formspree.io など）を利用してactionを設定する
  // 2) または自社サーバーの送信スクリプトにactionを設定する
  // のいずれかに置き換えてください。
  var contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var messageBox = document.querySelector("#form-message");
      if (messageBox) {
        messageBox.textContent =
          "送信ありがとうございます。（現在はデモ表示です。実際に送信するには送信先の設定が必要です。詳しくは README をご確認ください）";
        messageBox.style.display = "block";
      }
      contactForm.reset();
    });
  }

  // ---- 現在のページに合わせてナビゲーションをハイライト ----
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("is-active");
    }
  });
});
