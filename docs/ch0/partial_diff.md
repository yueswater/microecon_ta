# 偏微分

在現實的經濟決策中，我們很少面對只有單一變數的簡單情況。想像一位餐廳經理正在制定下個月的營運策略：他需要同時考慮食材成本、員工薪資、租金、廣告支出等多個因素對獲利的影響。當食材成本上漲10%時，在其他條件不變的情況下，獲利會如何變化？當他決定增加廣告預算時，假設其他成本維持不變，營收又會如何響應？這種「其他條件不變」的分析方式，正是偏微分的核心概念。

在經濟學中，偏微分被廣泛應用於分析多變數經濟函數，比如消費者面對多種商品的效用最大化問題、廠商在多種投入要素下的成本最小化問題，以及政府在考慮多種政策工具時的社會福利最大化問題。偏微分讓我們能夠在複雜的多變數環境中，分離並量化單一變數變化的純淨效應，這種「控制其他變數」的分析能力是現代經濟學不可或缺的核心技能。

## 偏微分的定義

對於多變數函數 $f(x_1, x_2, \ldots, x_n)$，**偏微分** (partial differentiation) 研究函數對其中一個變數的變化率，同時保持其他變數不變。

!!! note "偏導數"
    函數 $f(x, y)$ 對 $x$ 的偏導數定義為：
    $$
    \frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}
    $$

    類似地，對 $y$ 的偏導數為：
    $$
    \frac{\partial f}{\partial y} = \lim_{h \to 0} \frac{f(x, y+h) - f(x, y)}{h}
    $$

### 偏微分的計算法則

偏微分的計算與一般微分類似，只需將其他變數視為常數：

!!! example
    $f(x, y) = x^3 + 2x^2y + y^2$

    $$
    \frac{\partial f}{\partial x} = 3x^2 + 4xy, \quad \frac{\partial f}{\partial y} = 2x^2 + 2y
    $$

## 經濟學中的偏微分應用

### 邊際效用

對於效用函數 $U(x_1, x_2.$，各商品的邊際效用為：
$$
MU_1 = \frac{\partial U}{\partial x_1}, \quad MU_2 = \frac{\partial U}{\partial x_2}
$$

!!! example "Cobb-Douglas 效用函數"
    $U(x_1, x_2. = x_1^{\alpha} x_2^{\beta}$

    $$
    \begin{aligned}
    MU_1 &= \alpha x_1^{\alpha-1} x_2^{\beta} = \alpha \frac{U}{x_1}\\
    MU_2 &= \beta x_1^{\alpha} x_2^{\beta-1} = \beta \frac{U}{x_2}
    \end{aligned}
    $$

### 邊際替代率

**邊際替代率** (Marginal Rate of Substitution, MRS) 衡量消費者願意用一種商品替代另一種商品的比率：
$$
MRS_{12} = -\frac{MU_1}{MU_2} = -\frac{\partial U/\partial x_1}{\partial U/\partial x_2}
$$

### 生產函數的邊際產品

對於生產函數 $Q = f(K, L)$：

**邊際產品**：
$$
MP_K = \frac{\partial Q}{\partial K}, \quad MP_L = \frac{\partial Q}{\partial L}
$$

**邊際技術替代率** (Marginal Rate of Technical Substitution, MRTS)：
$$
MRTS_{LK} = -\frac{MP_L}{MP_K} = -\frac{\partial Q/\partial L}{\partial Q/\partial K}
$$

### 彈性的偏微分表示

**需求價格彈性**：
$$
\varepsilon_p = \frac{\partial Q^d}{\partial p} \cdot \frac{p}{Q^d}
$$

**需求所得彈性**：
$$
\varepsilon_M = \frac{\partial Q^d}{\partial M} \cdot \frac{M}{Q^d}
$$

**需求交叉彈性**：
$$
\varepsilon_{xy} = \frac{\partial Q_x^d}{\partial p_y} \cdot \frac{p_y}{Q_x^d}
$$

## 高階偏導數

### 二階偏導數

對於函數 $f(x, y)$，存在四個二階偏導數：

1. $\frac{\partial^2 f}{\partial x^2} = f_{xx}$：對 $x$ 的二階偏導數
2. $\frac{\partial^2 f}{\partial y^2} = f_{yy}$：對 $y$ 的二階偏導數  
3. $\frac{\partial^2 f}{\partial x \partial y} = f_{xy}$：混合偏導數
4. $\frac{\partial^2 f}{\partial y \partial x} = f_{yx}$：混合偏導數

### Hessian 矩陣

**Hessian 矩陣**是二階偏導數組成的矩陣：
$$
H = \begin{bmatrix}
f_{xx} & f_{xy} \\\\
f_{yx} & f_{yy}
\end{bmatrix}
$$

Hessian 矩陣用於判定函數的凹凸性和極值性質。

### Young 定理

在多變數微積分中，Young 定理保證了「混合偏導數」在適當條件下可交換，這對稱性使得 Hessian 矩陣可以視為對稱矩陣，進而簡化最適化與比較靜態分析。

!!! note "Young 定理"
    設 $f:\mathbb{R}^n\to\mathbb{R}$，若 $f_{x_i x_j}$ 與 $f_{x_j x_i}$ 在一開集 $U$ 上存在且連續 (或更弱的條件如在該點鄰域可微且二階偏導在該點連續) ，則對所有 $(x_1,\dots,x_n)\in U$，
    $$
    \frac{\partial^2 f}{\partial x_i \partial x_j}
    \;=\;
    \frac{\partial^2 f}{\partial x_j \partial x_i}.
    $$

**經濟學意義**：

-  Hessian 矩陣 $H_f$ 可視為對稱：$H_f = H_f^\top$。  
- 在效用/生產/成本等函數的二階分析、二階充分條件與泰勒展開時，公式更簡潔。  
- 對於需求系統的整合性 (integrability) 與潛在函數存在性，有助於檢驗一致性。

!!! question "偏微分計算"
    給定效用函數 $U(x, y) = x^{0.4} y^{0.6}$，價格分別為 $p_x = 2$，$p_y = 3$，所得為 $M = 120$。

    1. 計算兩商品的邊際效用 $MU_x$ 和 $MU_y$
    2. 求邊際替代率 $MRS_{xy}$
    3. 在均衡點，$MRS_{xy} = p_x/p_y$，求均衡消費組合
    4. 驗證預算約束是否滿足

!!! question "檢查混合偏導是否可交換"
    令 $f(x,y)=x^2y+e^{xy}$。  
    1. 計算 $f_{xy}$ 與 $f_{yx}$。  
    2. 說明為何在 $\mathbb{R}^2$ 內它們必然相等。  