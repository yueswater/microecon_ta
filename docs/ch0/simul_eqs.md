# 聯立方程式的求解

當線性方程組滿秩 (行列式非零) 時，Cramer 法則給出閉式解，方便比較靜態與符號分析。

!!! note "Cramer 法則"
    考慮 $A\mathbf{x}=\mathbf{b}$，其中 $A\in\mathbb{R}^{n\times n}$、$\det(A)\neq 0$。記 $A_i(\mathbf{b})$ 為以 $\mathbf{b}$ 取代 $A$ 的第 $i$ 欄所得矩陣，則
    $$
    x_i \;=\; \frac{\det\!\big(A_i(\mathbf{b})\big)}{\det(A)},\qquad i=1,\dots,n.
    $$

**$2 \times 2$ 範例**  
$$
\begin{bmatrix}
a_{11} & a_{12}\\
a_{21} & a_{22}
\end{bmatrix}
\begin{bmatrix}
x_1\\ x_2
\end{bmatrix}
=
\begin{bmatrix}
b_1\\ b_2
\end{bmatrix},
\quad
\det(A)=a_{11}a_{22}-a_{12}a_{21}\neq 0.
$$

$$
x_1=\frac{\det\!\begin{bmatrix} b_1 & a_{12}\\ b_2 & a_{22}\end{bmatrix}}{\det(A)},
\qquad
x_2=\frac{\det\!\begin{bmatrix} a_{11} & b_1\\ a_{21} & b_2\end{bmatrix}}{\det(A)}.
$$


**經濟應用**：

- 局部線性化後的一階條件可寫成 $A\,d\mathbf{x}=\mathbf{b}$，用 Cramer 法則觀察 $d\mathbf{x}$ 的符號與參數依賴。  
- 兩市場兩方程的比較靜態、投入產出模型的局部分析。

!!! example "用 Cramer 法則求解比較靜態"
    聯立

    $$
    \begin{cases}
    2p+q=10\\\\
    -\,p+3q=5
    \end{cases}
    $$
    
    1. 求 $(p,q)$。
    2. 若常數項向量改為 $(10+\delta,\,5)$，用 Cramer 法則寫出 $dp/d\delta,\, dq/d\delta$。  