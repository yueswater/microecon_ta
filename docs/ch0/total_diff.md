# 全微分

想像你是一位投資顧問，客戶詢問：「如果股市上漲5%，同時利率下降1%，我的投資組合價值會如何變化？」這個問題涉及多個變數同時變動對結果的綜合影響——也就是**全微分** (total differential) 所刻畫的「一小步變動會讓函數值改變多少」。全微分提供了線性近似的語言，讓我們在多變數環境下做敏感度分析與比較靜態。

## 全微分的定義與矩陣表示

!!! note "全微分"
    設 $f:\mathbb{R}^n\to\mathbb{R}$ 在點 $\mathbf{x}=(x_1,\dots,x_n)$ 可微，對於小變化 $dx_1,\dots,dx_n$，有

    $$
    df \;\approx\; \sum_{i=1}^n \frac{\partial f}{\partial x_i}(\mathbf{x})\,dx_i
    \;=\; \nabla f(\mathbf{x})^\top\, d\mathbf{x},
    $$

    其中 $\nabla f(\mathbf{x})=\left(\frac{\partial f}{\partial x_1},\dots,\frac{\partial f}{\partial x_n}\right)^\top$，
    $d\mathbf{x}=(dx_1,\dots,dx_n)^\top$。忽略高於一次的小量，$df$ 給出 $f$ 在 $\mathbf{x}$ 附近的線性近似。

若各自變數又都依賴某外生變數 $t$，以**全導數** (total derivative) 表示為

$$
\frac{df}{dt} \;=\; \sum_{i=1}^n \frac{\partial f}{\partial x_i}\frac{dx_i}{dt}
\;=\; \nabla f^\top \frac{d\mathbf{x}}{dt}.
$$

### 經濟詮釋：線性近似與邊際貢獻分解

在需求 $Q=Q(p,M,p_y,\dots)$ 的例子裡，

$$
dQ \;\approx\; Q_p\,dp + Q_M\,dM + Q_{p_y}\,dp_y + \cdots,
$$

每一項都是「邊際效果 $\times$ 該變數的小變化」，可用來做**影響來源分解** (哪個外生變動貢獻較大) 。

### 對數微分與彈性分解

將上式改寫為比例變動的線性近似 (對數全微分) ：

$$
d\ln f \;\approx\; \sum_{i=1}^n \underbrace{\frac{\partial f}{\partial x_i}\frac{x_i}{f}}_{\text{彈性 } \varepsilon_i}\, d\ln x_i,
$$

其中 $\varepsilon_i$ 即 $f$ 對 $x_i$ 的**彈性**。在實務上，這常用來解釋「多少％的 $x_i$ 變動帶來多少％的 $f$ 變動」。

## 經濟學中的基本應用

- **需求敏感度**：$dQ \approx Q_p dp + Q_M dM$，量化「價格調整」與「所得變動」對數量的即時影響。
- **成本敏感度**：總成本 $C(\mathbf{w},Q)$ 滿足 $dC \approx \sum_i C_{w_i} dw_i + C_Q dQ$。在最適成本下，Shephard's lemma 告訴我們 $C_{w_i}=x_i^*(\mathbf{w},Q)$ (條件要素需求) ，於是
  $$
  dC \approx \sum_i x_i^*\,dw_i + MC\,dQ.
  $$
- **利潤敏感度**：$\pi(p,\mathbf{w})=\max_Q {pQ-C(\mathbf{w},Q)}$ 的最適值函數對參數的敏感度，將在「包絡定理」段落精確給出。

## 多變數鏈式法則 (Composite / Nested Models) 

很多經濟模型是巢狀的：$y = f\big(g(x,z),\, h(x,z)\big)$。令 $u = g(x,z)$、$v = h(x,z)$，則

$$
\frac{\partial y}{\partial x}
= f_u\,g_x + f_v\,h_x,
\qquad
\frac{\partial y}{\partial z}
= f_u\,g_z + f_v\,h_z,
$$

其中 $f_u \equiv \dfrac{\partial f}{\partial u}$、$g_x \equiv \dfrac{\partial g}{\partial x}$ 等。

矩陣寫法為
$$
dy \;=\; \nabla f(u,v)^\top
\begin{bmatrix}
du\\\\ dv
\end{bmatrix},
\qquad
\begin{bmatrix}
du\\\\ dv
\end{bmatrix}
\;=\;
J_{(g,h)}
\begin{bmatrix}
dx\\\\ dz
\end{bmatrix},
$$

故有
$$
dy \;=\; \nabla f(u,v)^\top\, J_{(g,h)}\,
d\begin{bmatrix}x\\\\ z\end{bmatrix}.
$$


## 隱函數定理與比較靜態

當經濟關係以方程 $F(x,y)=0$ 給定 (例如市場均衡、最適條件) ，且 $F_y \neq 0$，則存在函數 $y=\phi(x)$ 使得

!!! note "隱函數定理的一階比較靜態"
    $$
    \frac{dy}{dx} \;=\; -\,\frac{F_x}{F_y}.
    $$

更一般地，對參數向量 $\boldsymbol{\theta}$ 有 $F(\mathbf{x},\boldsymbol{\theta})=\mathbf{0}$，若 $J_{\mathbf{x}}F$ 可逆，則**比較靜態** (small-change sensitivity) 為

$$
\frac{d\mathbf{x}}{d\boldsymbol{\theta}}
\;=\;
-\big(J_{\mathbf{x}}F\big)^{-1}\, J_{\boldsymbol{\theta}}F.
$$

!!! example "壟斷者最適產量"
    一階條件 $F(Q,p)\equiv MR(Q,p)-MC(Q)=0$，
    $$
    \frac{dQ^*}{dp}
    = -\,\frac{F_p}{F_Q}
    = -\,\frac{\partial MR/\partial p}{\partial MR/\partial Q \;-\; \partial MC/\partial Q}.
    $$

## 包絡定理 (Envelope Theorem) 

當我們關心**最適值函數**對參數的變化率，而非最適解本身如何變動，包絡定理提供了極其有效的捷徑。

### 無約束情形

令
$$
V(\theta) \;=\; \max_{x}\; f(x,\theta),
$$
最適解 $x^*(\theta)$ 滿足 $f_x(x^*,\theta)=0$。若規則性條件成立，則

!!! note "包絡定理 (無約束)"
    $$
    \frac{dV}{d\theta}
    \;=\;
    \left.\frac{\partial f(x,\theta)}{\partial \theta}\right|_{x=x^*(\theta)}.
    $$

也就是說，不需要追蹤 $x^*(\theta)$ 的變動，只要在最適點把 $x$ 當常數、直接對 $\theta$ 偏微分。

!!! example "壟斷利潤對價格參數的敏感度"
    $\pi^*(p)=\max_Q \{\,pQ-C(Q)\,\}$，則：

    $$
    \frac{d\pi^*}{dp}
    = \left.\frac{\partial (pQ-C)}{\partial p}\right|_{Q=Q^*(p)}
    = Q^*(p).
    $$

### 有約束情形

令
$$
V(\theta) \;=\; \max_{x}\; f(x,\theta)\ \text{s.t.}\ g(x,\theta)=0,
$$
拉氏量 $\mathcal{L}=f(x,\theta)+\lambda\,g(x,\theta)$。在最適 $(x^*,\lambda^*)$ 下，

!!! note "包絡定理 (等式約束)"
    $$
    \frac{dV}{d\theta}
    =
    \left.\Big(\frac{\partial f}{\partial \theta}+\lambda\,\frac{\partial g}{\partial \theta}\Big)\right|_{(x^*,\lambda^*)}.
    $$

!!! example "成本函數與要素價格"
    $$
    C(\mathbf{w},Q)=\min_{\mathbf{x}}\ \sum_i w_i x_i
    \quad \text{s.t.}\quad f(\mathbf{x})\ge Q
    $$
    
    的包絡定理給出

    $$
    \frac{\partial C}{\partial w_i}=x_i^*(\mathbf{w},Q),\qquad
    \frac{\partial C}{\partial Q}=\lambda^*=\text{MC}.
    $$


## 二階全微分與曲率

更精細的近似可以加入二階項：
$$
df \;\approx\; \nabla f^\top d\mathbf{x} \;+\; \tfrac{1}{2}\, d\mathbf{x}^\top H_f\, d\mathbf{x},
$$
其中 $H_f$ 為 Hessian 矩陣；這與前述凹凸性判斷緊密相關，常用於二階比較靜態或福利變化二階近似。

!!! question "全微分與彈性分解 (需求敏感度)"
    某商品需求 $Q(p,M)=A\,M^{\eta}\,p^{-\varepsilon}$，其中 $A>0$、$\eta,\varepsilon>0$。

    1. 推導 $dQ$ 的全微分表示式。  
    2. 以對數微分形式寫出 $d\ln Q$，並解釋兩個彈性 $\eta,\varepsilon$ 的經濟意義。  
    3. 令 $A=1,\ \eta=0.6,\ \varepsilon=1.2$；若 $dp/p=+5\%$、$dM/M=+4\%$，用線性近似預測 $dQ/Q$。  
    4. 設 $p=10,\ M=100$，計算上題中的 $dQ$ 數值近似。

!!! question "隱函數定理與比較靜態 (均衡)"
    市場由需求 $Q^d=60-2p+\alpha M$、供給 $Q^s=-10+3p$ 決定均衡 $F(p,M)\equiv Q^d-Q^s=0$。

    1. 寫出 $F(p,M)=0$ 並求 $\displaystyle \frac{\partial p^*}{\partial M}$。  
    2. 解釋 $\alpha>0$ 時，所得上升對均衡價格的影響方向。  
    3. 令 $\alpha=0.2$，在 $M=100$ 的附近估算 $dM=+5$ 對 $p^*$ 的近似變動。

!!! question "包絡定理 (利潤敏感度)"
    壟斷者面對線性需求 $p=a-bQ$、成本 $C(Q)=F+cQ+\tfrac{1}{2}\gamma Q^2$。定義最適利潤
    $$
    \pi^*(a)=\max_Q \big[(a-bQ)Q - C(Q)\big].
    $$

    1. 用一階條件求最適 $Q^*(a)$。  
    2. 用包絡定理求 $\dfrac{d\pi^*}{da}$ 並詮釋其意義。  
    3. 比較直接對最適利潤函數微分 vs. 先代回 $Q^*(a)$ 再微分的難易差異。