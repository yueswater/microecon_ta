# 極限與連續性

當你在網路購物平台比較不同商品的價格時，是否注意到某些商品之間似乎存在著完美的替代關係，而另一些商品則必須搭配使用才有意義？比如說，對大多數消費者而言，可口可樂和百事可樂幾乎可以完全互相替代——當其中一種漲價時，消費者很容易轉向另一種，這種近乎完美的替代關係在數學上可以用特殊的函數形式來描述。相反地，左腳鞋和右腳鞋、汽車和汽油、電腦和軟體等商品組合，則展現出強烈的互補特性——缺少其中任何一樣，另一樣的價值就會大打折扣。

這些看似簡單的日常觀察，在數學上涉及函數在極限情況下的行為特性。透過研究函數在參數趨向特定數值時的極限行為，我們可以理解從一般性的替代彈性函數，如何推導出完全替代和完全互補這兩種極端但重要的特殊情況。

## 極限的基本概念

**極限** (limit) 是微積分的核心概念，描述函數在某點附近的行為趨勢。在經濟學中，極限概念幫助我們理解經濟變數在極端情況下的表現。

!!! note "函數極限"
    設函數 $f(x)$ 在點 $a$ 的某個去心鄰域內有定義，若存在實數 $L$，使得對任意 $\varepsilon > 0$，存在 $\delta > 0$，當 $0 < |x - a| < \delta$ 時，有 $|f(x) - L| < \varepsilon$，則稱：
    $$
    \lim_{x \to a} f(x) = L
    $$

### 經濟學中的極限應用

#### 邊際概念

經濟學中的**邊際** (marginal) 概念本質上就是極限：

**邊際效用**：
$$
MU = \lim_{\Delta x \to 0} \frac{\Delta U}{\Delta x} = \frac{dU}{dx}
$$

**邊際成本**：
$$
MC = \lim_{\Delta Q \to 0} \frac{\Delta C}{\Delta Q} = \frac{dC}{dQ}
$$

**邊際產品**：
$$
MP_L = \lim_{\Delta L \to 0} \frac{\Delta Q}{\Delta L} = \frac{\partial Q}{\partial L}
$$

## CES 函數與特殊情況

**常替代彈性** (Constant Elasticity of Substitution, CES) 函數是經濟學中描述生產技術和消費偏好的重要工具。

### CES 函數的一般形式

CES 函數的標準形式為：
$$
f(x_1, x_2. = A[ax_1^{-\rho} + (1-a)x_2^{-\rho}]^{-\frac{1}{\rho}}
$$

其中：

- $A > 0$：效率參數
- $0 < a < 1$：分配參數
- $\rho > -1$：替代參數

**替代彈性** (elasticity of substitution) 定義為：
$$
\sigma = \frac{1}{1 + \rho}
$$

### 極限推導特殊情況

CES 函數的強大之處在於，通過讓替代參數 $\rho$ 趨向不同的極限值，可以得到許多重要的特殊函數形式。

#### 完全替代

當 $\rho \to -1$ 時：
$$
\lim_{\rho \to -1} A[ax_1^{-\rho} + (1-a)x_2^{-\rho}]^{-\frac{1}{\rho}} = A[ax_1 + (1-a)x_2]
$$

這就是**線性函數**，表示兩種投入要素或消費品可以完全替代。

**推導過程**：
$$
\begin{aligned}
&\lim_{\rho \to -1} [ax_1^{-\rho} + (1-a)x_2^{-\rho}]^{-\frac{1}{\rho}} \\
&= \lim_{\rho \to -1} [ax_1^{1+\rho} + (1-a)x_2^{1+\rho}]^{\frac{1}{1+\rho}} \\
&= ax_1 + (1-a)x_2
\end{aligned}
$$

#### Cobb-Douglas

當 $\rho \to 0$ 時，需要使用 L'Hôpital 法則：
$$
\lim_{\rho \to 0} A[ax_1^{-\rho} + (1-a)x_2^{-\rho}]^{-\frac{1}{\rho}} = Ax_1^a x_2^{1-a}
$$

這就是著名的**Cobb-Douglas 函數**。

**推導過程**：
令 $g(\rho) = [ax_1^{-\rho} + (1-a)x_2^{-\rho}]^{-\frac{1}{\rho}}$

取對數：
$$
\ln g(\rho) = -\frac{1}{\rho} \ln[ax_1^{-\rho} + (1-a)x_2^{-\rho}]
$$

當 $\rho \to 0$ 時，分子分母皆趨向 0，使用洛必達法則：
$$
\lim_{\rho \to 0} \ln g(\rho) = a \ln x_1 + (1-a) \ln x_2 = \ln(x_1^a x_2^{1-a})
$$

因此：
$$
\lim_{\rho \to 0} g(\rho) = x_1^a x_2^{1-a}
$$

#### 完全互補

當 $\rho \to +\infty$ 時：
$$
\lim_{\rho \to +\infty} A\,[ax_1^{-\rho} + (1-a)x_2^{-\rho}]^{-\tfrac{1}{\rho}}
= A \min\big\lbrace \tfrac{x_1}{a}, \tfrac{x_2}{1-a}\big\rbrace
$$

這就是**Leontief 函數**或**完全互補函數**。

!!! note "CES 函數極限"
    給定 CES 效用函數：
    $$
    U(x_1, x_2. = [0.6x_1^{-0.5} + 0.4x_2^{-0.5}]^{-2}
    $$

    1. 計算替代彈性 $\sigma$
    2. 說明此函數相對於 Cobb-Douglas 函數的替代特性
    3. 若 $x_1 = x_2 = 10$，計算效用值