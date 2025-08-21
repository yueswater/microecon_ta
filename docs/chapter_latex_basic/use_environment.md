> 寫作需要潤飾，排版也少不了美編。

雖然這句話聽起來像廢話，但實際上卻是一門極深的學問。如果說文字是內容的骨幹，那麼排版就是讓它看起來「像樣」的肌膚與衣裝。

## 環境

環境的基本形式是成雙成對的，可以想像成將內容包裹在一個區域內，對於特定區域內「從這裡到這裡」進行調整與美化。如果不包在區域內，很有可能會誤碰到其他不該調整的地方。

```latex
\begin{環境名稱}
% 內容
\begin{環境名稱}
```

環境名稱有些是 LaTeX 內建，有些則來自額外載入的套件，還有一些則是使用者自訂的。

!!! tip "自訂環境"

    如果想要先了解如何自訂環境，可以跳轉到[某章節]()。

## 文件環境

在[0.1 指令與註解](../use_command)時，我們已經看過一份最簡單的 LaTeX 文件範例，其中有一個不可或缺的核心結構——那就是 `document` 環境：它標示了整份文件的正文開始與結束位置，所有要輸出的內容都必須包裹在這個環境中，否則將不會被編譯器所處理。

有了指令與環境的知識，我們就可以解釋最初的範例每一行的功能：

=== "main.tex"

    ```latex
    \documentclass[12pt]{article} % 指定文件類型為 article，字體大小為 12pt。
    \title{My First Document}     % 設定文件的標題
    \author{Author}               % 設定作者名字
    \date{\today}                 % 設定日期為系統的當天日期

    \begin{document}              % 開始正文內容
    \maketitle                    % 將前面設定的標題、作者與日期顯示出來。

    \end{document}                % 標示正文結束
    ```

注意到，如果在正文開始區域不加入 `\maketitle`，標題、作者名字與日期都會只停留在**定義階段**，不會實際顯示在文件中。

<!-- !!! question "下列哪一個是 Python 的關鍵字？"
    <form class="quiz" data-answer="c">
        <label><input type="radio" name="q1" value="a"> print</label><br>
        <label><input type="radio" name="q1" value="b"> len</label><br>
        <label><input type="radio" name="q1" value="c"> def</label><br>
        <label><input type="radio" name="q1" value="d"> range</label>
    </form>
    <div class="quiz-feedback"></div> -->