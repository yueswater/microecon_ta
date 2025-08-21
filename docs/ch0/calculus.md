## 微積分基礎

!!! abstract "學習目標"
    - 掌握 **極限、連續、可微** 的關係與檢核方式  
    - 熟悉 **單變數與多變數** 的微分工具：偏導、梯度、全微分、Jacobian、Hessian  
    - 能用 **二階條件** 與 **Hessian 正定性** 判斷極值、凹凸性  
    - 會用 **隱函數定理**、**鏈鎖律** 做比較靜態與敏感度分析  
    - 了解 **Lagrange 乘數法** 的流程（完整細節放在後續小節「最適化理論」）

---

### 1. 極限、連續與可微

#### 1.1 直觀與形式定義
- **極限**：$x\to a$ 時，$f(x)$ 越來越接近某數 $L$，記為 $\lim_{x\to a} f(x)=L$。  
- **連續**：$f$ 在 $x=a$ 連續 $\iff \lim_{x\to a} f(x)=f(a)$。  
- **可微**：$f$ 在 $x=a$ 可微 $\iff$ 極限
  $$
  f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
  $$
  存在；可微 $\Rightarrow$ 連續（反之不必然）。

!!! tip "檢核順序（單點 $a$）"
    1. 有定義：$f(a)$ 存在  
    2. 左右極限存在且相等：$\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)$  
    3. 極限等於函數值：$\lim_{x\to a}f(x)=f(a)$  
    4. 若還要可微，再檢查差商極限是否存在

??? example "範例：分段函數的連續與可微"
    設 $f(x)=\begin{cases}
    x^2-1,& x<1\\
    2x-2,& x\ge 1
    \end{cases}$。  
    - 連續性：$\lim_{x\to 1^-}f(x)=0$、$\lim_{x\to 1^+}f(x)=0$，且 $f(1)=0$，故在 $x=1$ 連續。  
    - 可微性：左導數 $f'_-(1)=2x|_{x=1}=2$，右導數 $f'_+(1)=2$，相等，故在 $x=1$ 可微。

---

### 2. 單變數微分與最適化

#### 2.1 導數與二階導數
- **單調性**：$f'(x)>0$（嚴增）、$f'(x)<0$（嚴減）  
- **凹凸性**：$f''(x)<0$ 凹（concave），$f''(x)>0$ 凸（convex）  
- **拐點**：$f''(x)$ 變號處（需再查曲率）

#### 2.2 無約束最適化
- **一階必要條件（FOC）**：$f'(x^\*)=0$  
- **二階條件（SOC）**：
  $$
  \begin{cases}
  f''(x^\*)<0 & \Rightarrow \text{局部極大} \\
  f''(x^\*)>0 & \Rightarrow \text{局部極小}
  \end{cases}
  $$

???+ example "範例：多項式的極值"
    設 $f(x)=ax-bx^2-cx^3$，$a,b,c>0$。  
    - $f'(x)=a-2bx-3cx^2$，解 $f'(x)=0$ 得候選點。  
    - $f''(x)=-2b-6cx<0$ 對所有 $x\ge 0$，故在非負域的臨界點為局部極大。  
    - 若限制 $x\ge 0$，需同時比對邊界 $x=0$ 的函數值。

!!! warning "常見錯誤"
    - 只解 $f'(x)=0$ 就下結論；**一定要**配合 $f''(x)$ 或其他判別（如端點、圖形）  
    - 忽略定義域與邊界：很多問題有自然限制（如 $x\ge 0$）

---

### 3. 多變數微分：偏導、梯度、全微分、Jacobian

#### 3.1 偏導與梯度
- **偏導**：$f_x=\frac{\partial f}{\partial x}$、$f_y=\frac{\partial f}{\partial y}$  
- **梯度（gradient）**：$\nabla f(\mathbf{x})=\begin{bmatrix}f_{x_1}&\cdots&f_{x_n}\end{bmatrix}^\top$  
  幾何意義：**最陡上升方向**。

#### 3.2 全微分與線性近似
- 對 $f(x,y)$，在 $(x_0,y_0)$ 的全微分：
  $$
  df \approx f_x(x_0,y_0)\,dx+f_y(x_0,y_0)\,dy
  $$
  小變化下的**一階近似**：$f(x_0+\Delta x,y_0+\Delta y)\approx f(x_0,y_0)+df$。

#### 3.3 Jacobian（多函數對多變數）
- $\mathbf{g}(\mathbf{x})=(g_1,\dots,g_m)$ 對 $\mathbf{x}=(x_1,\dots,x_n)$ 的 Jacobian：
  $$
  J=\left[\frac{\partial g_i}{\partial x_j}\right]_{m\times n}
  $$
  是向量值函數的一階導數矩陣。

??? example "範例：Cobb–Douglas 的梯度與全微分"
    設 $f(x,y)=x^\alpha y^{1-\alpha}$，$0<\alpha<1$。  
    $$
    f_x=\alpha x^{\alpha-1}y^{1-\alpha},\quad
    f_y=(1-\alpha)x^\alpha y^{-\,( \alpha )}
    $$
    在 $(x_0,y_0)$ 的全微分：
    $$
    df\approx \alpha x_0^{\alpha-1}y_0^{1-\alpha}\,dx+(1-\alpha)x_0^\alpha y_0^{-\alpha}\,dy
    $$

---

### 4. 鏈鎖律與隱函數定理（IFT）

#### 4.1 鏈鎖律（Chain Rule）
若 $z=f(u,v)$，且 $u=u(x,y)$、$v=v(x,y)$，則
$$
\frac{\partial z}{\partial x}=f_u\frac{\partial u}{\partial x}+f_v\frac{\partial v}{\partial x},\qquad
\frac{\partial z}{\partial y}=f_u\frac{\partial u}{\partial y}+f_v\frac{\partial v}{\partial y}.
$$

#### 4.2 隱函數定理（兩變數版本，直觀版）
若 $F(x,y)=0$ 在 $(x_0,y_0)$ 滿足 $F$ 可微且 $F_y(x_0,y_0)\ne 0$，則存在鄰域內的可微函數
$y=\varphi(x)$ 使得 $F(x,\varphi(x))=0$，且
$$
\frac{dy}{dx}=-\frac{F_x}{F_y}\Bigg|_{(x,y)=(x_0,y_0)}.
$$

!!! note "用途"
    - 比較靜態：參數改變如何影響內生變數  
    - 靈敏度分析：$F_x/F_y$ 給出方向與大小  
    - 多維版本可用 Jacobian 與逆函數定理處理

??? example "範例：隱函數的導數"
    設 $F(x,y)=x^2+y^2-1=0$，圓上的 $y=y(x)$。  
    $F_x=2x,\;F_y=2y$，若 $y\ne 0$，則
    $$
    \frac{dy}{dx}=-\frac{F_x}{F_y}=-\frac{x}{y}.
    $$

---

### 5. Hessian 與凹凸性判別（多變數）

#### 5.1 Hessian 定義
對 $f:\mathbb{R}^n\to\mathbb{R}$，
$$
H_f(\mathbf{x})=
\begin{bmatrix}
\frac{\partial^2 f}{\partial x_1^2} & \cdots & \frac{\partial^2 f}{\partial x_1\partial x_n}\\
\vdots & \ddots & \vdots\\
\frac{\partial^2 f}{\partial x_n\partial x_1} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
\end{bmatrix}.
$$

#### 5.2 正定性與凹凸性
- $H\prec 0$（嚴負定）$\Rightarrow f$ 嚴凹  
- $H\succ 0$（嚴正定）$\Rightarrow f$ 嚴凸  
- **Sylvester 判別法**（$2\times 2$）：  
  設
  $
  H=\begin{bmatrix}
  a & b\\ b & c
  \end{bmatrix}
  $，
  則
  $$
  \det(H)=ac-b^2,\quad
  \begin{cases}
  a>0,\ \det(H)>0 &\Rightarrow H\succ 0\\[2pt]
  a<0,\ \det(H)>0 &\Rightarrow H\prec 0
  \end{cases}
  $$

???+ example "範例：$f(x,y)=\ln x+\ln y$ 的凹性"
    $$
    f_x=\frac{1}{x},\quad f_y=\frac{1}{y},\quad
    f_{xx}=-\frac{1}{x^2},\quad f_{yy}=-\frac{1}{y^2},\quad f_{xy}=0.
    $$
    $$
    H=
    \begin{bmatrix}
    -x^{-2} & 0\\
    0 & -y^{-2}
    \end{bmatrix},
    \quad a=-x^{-2}<0,\ \det(H)=x^{-2}y^{-2}>0
    $$
    故 $H\prec 0$，$f$ 嚴凹。

---

### 6. 多變數最適化：一階與二階條件（無約束）

- **FOC**：$\nabla f(\mathbf{x}^\*)=\mathbf{0}$  
- **SOC（局部極值判別）**：取 $H_f(\mathbf{x}^\*)$  
  $$
  \begin{cases}
  H\prec 0 &\Rightarrow \text{局部極大}\\
  H\succ 0 &\Rightarrow \text{局部極小}\\
  \text{不定} &\Rightarrow \text{鞍點或需進一步檢查}
  \end{cases}
  $$

??? example "範例：二次型的極值"
    設 $f(\mathbf{x})=-\tfrac12\,\mathbf{x}^\top Q\,\mathbf{x}+\mathbf{b}^\top\mathbf{x}$，若 $Q\succ 0$，  
    則 $H=-Q\prec 0$，$f$ 嚴凹且唯一極大點由 $\nabla f=0$ 得
    $$
    -Q\mathbf{x}^\*+\mathbf{b}=0\ \Rightarrow\ \mathbf{x}^\*=Q^{-1}\mathbf{b}.
    $$

---

### 7. 泰勒展開與局部近似

#### 7.1 單變數
在 $x_0$ 附近，二階泰勒：
$$
f(x)\approx f(x_0)+f'(x_0)(x-x_0)+\frac12 f''(x_0)(x-x_0)^2.
$$

#### 7.2 多變數
在 $\mathbf{x}_0$ 附近，二階泰勒：
$$
f(\mathbf{x})\approx f(\mathbf{x}_0)+\nabla f(\mathbf{x}_0)^\top(\mathbf{x}-\mathbf{x}_0)
+\frac12(\mathbf{x}-\mathbf{x}_0)^\top H_f(\mathbf{x}_0)(\mathbf{x}-\mathbf{x}_0).
$$

!!! tip "用途"
    - **誤差上界/近似**：線性化、二階修正  
    - **判別凹凸**：用 Hessian 的二次型判斷

---

### 8. 受限最適化的 Lagrange 乘數法（流程預覽）

目標：極值化 $f(\mathbf{x})$，約束 $g(\mathbf{x})=c$。  
構造
$$
\mathcal{L}(\mathbf{x},\lambda)=f(\mathbf{x})+\lambda\,[\,c-g(\mathbf{x})\,].
$$
FOC：
$$
\nabla_{\mathbf{x}}\mathcal{L}=\mathbf{0},\qquad \frac{\partial\mathcal{L}}{\partial\lambda}=c-g(\mathbf{x})=0.
$$
經典經驗法則：在內部解，常可得到 **等邊際條件**（如「每單位資源的邊際貢獻相等」）。

???+ example "範例：等產量曲線上的成本最小化（簡版）"
    設成本 $C=wL+rK$，產出約束 $F(L,K)=\bar{Q}$。  
    $$
    \mathcal{L}=wL+rK+\lambda\,(\bar{Q}-F(L,K)).
    $$
    FOC：
    $$
    \begin{aligned}
    &\frac{\partial\mathcal{L}}{\partial L}=w-\lambda F_L=0,\quad
    \frac{\partial\mathcal{L}}{\partial K}=r-\lambda F_K=0,\\
    &\frac{\partial\mathcal{L}}{\partial\lambda}=\bar{Q}-F(L,K)=0.
    \end{aligned}
    $$
    消去 $\lambda$ 得 **等邊際條件**：
    $$
    \frac{F_L}{F_K}=\frac{w}{r}.
    $$
    二階條件需檢查拉格朗日之 **bordered Hessian**（完整細節與 KKT 放在下一小節）。

---

### 9. 實作流程圖（無約束 → 受限）

!!! info "解題流程（速查）"
    1. **定義域** 與 **可微性**：先看函數是否在域內可導  
    2. **無約束**：解 $\nabla f=0$；檢 $H$ 的正定性；比對邊界  
    3. **單一等式約束**：寫 $\mathcal{L}$，解聯立 FOC；檢查 bordered Hessian  
    4. **參數敏感度**：必要時用 IFT 求 $\dfrac{\partial x^\*}{\partial \theta}$  
    5. **近似**：需要誤差評估時，用泰勒展開做局部近似

---
