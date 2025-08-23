# 最適化

等式約束下的最適化可透過 Lagrangian 將約束內生化，FOC 給出必要條件；在凹性/凸性假設下亦為充分。

!!! note "等式約束最大化的 Lagrangian 與 FOC"
    問題：
    $$
    \max_{\mathbf{x}\in\mathbb{R}^n}\ f(\mathbf{x})
    \quad\text{s.t.}\quad
    g_j(\mathbf{x})=c_j,\ \ j=1,\dots,m.
    $$
    Lagrangian：
    $$
    \mathcal{L}(\mathbf{x},\boldsymbol{\lambda})
    =
    f(\mathbf{x})+\sum_{j=1}^m \lambda_j\,[\,c_j-g_j(\mathbf{x})\,].
    $$
    FOC (必要條件) ：
    $$
    \nabla_{\mathbf{x}}\mathcal{L}
    =\nabla f(\mathbf{x})-\sum_{j=1}^m \lambda_j \nabla g_j(\mathbf{x})=\mathbf{0},
    \qquad
    g_j(\mathbf{x})=c_j\ \ (j=1,\dots,m).
    $$

**充分性 (常見情形) **：

- 若 $f$ **嚴格凹**且可行集為非空的仿射子集 (等式約束線性獨立) ，則解唯一。  
- 對極小化與凸性假設類推；不等式約束則升級為 **KKT 條件** (此處略) 。

**經濟詮釋 (影子價格) **：

- 乘數 $\lambda_j$ 為約束 $g_j(\mathbf{x})=c_j$ 的**影子價格**：放鬆 $c_j$ 一小單位帶來的最適值變化率。  
- 由包絡定理得 $\dfrac{\partial V}{\partial c_j}=\lambda_j^*$。

!!! question "效用最大化的 Lagrangian"
    令效用極大化問題為：
    $$
        \begin{aligned}
            \max\;& U(x_1,x_2) = x_1^{\alpha}x_2^{1-\alpha}\\\\
            \text{s.t. }\;& p_1x_1+p_2x_2=M
        \end{aligned}
    $$
    1. 寫出 Lagrangian 並推導 FOC。  
    2. 求最適需求 $(x_1^*,x_2^*)$。  
    3. 說明 $\lambda^*$ 的經濟意義。  