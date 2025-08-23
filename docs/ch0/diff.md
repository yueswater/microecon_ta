# 微分

站在經濟學的角度思考，當你每天早上路過同一家咖啡店時，是否曾好奇老闆如何決定咖啡的最佳價格？價格訂得太高，顧客可能會流失；訂得太低，雖然銷量增加但獲利可能下降。這個看似簡單的定價決策，實際上涉及複雜的邊際分析——老闆需要找到邊際收益等於邊際成本的那個精確點。微分正是幫助我們找到這個最佳決策點的數學工具。

從消費者角度來看，當你決定是否多買一個甜甜圈時，你的大腦其實在進行一種直觀的邊際效用計算：這額外的甜甜圈能帶來多少滿足感？是否值得它的價格？微分讓我們能夠精確量化這些「邊際變化」，無論是邊際效用、邊際成本、邊際收益，還是邊際產品，都是透過微分概念來定義和計算的。掌握微分技巧，就如同掌握了經濟分析的瑞士刀，能夠解剖各種複雜的經濟現象。

## 導數的定義與經濟意義

**導數** (derivative) 描述函數在某點的瞬間變化率，在經濟學中對應**邊際** (marginal) 概念。

!!! note "導數定義"
    函數 $f(x)$ 在點 $x = a$ 的導數定義為：
    $$
    f^{\prime}(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
    $$

    若此極限存在，則稱函數在點 $a$ 可微 (differentiable)。

### 邊際概念在經濟學中的應用

#### 邊際效用 (Marginal Utility)

對於效用函數 $U(x)$，邊際效用定義為：
$$
MU(x) = \frac{dU}{dx}
$$

邊際效用衡量額外消費一單位商品所增加的效用。根據邊際效用遞減法則：
$$
\frac{d^2U}{dx^2} < 0
$$

#### 邊際成本 (Marginal Cost)

對於總成本函數 $C(Q)$，邊際成本為：
$$
MC(Q) = \frac{dC}{dQ}
$$

邊際成本表示額外生產一單位產品的成本增加量。

#### 邊際收益 (Marginal Revenue)

對於總收益函數 $R(Q) = p(Q) \cdot Q$，邊際收益為：
$$
MR(Q) = \frac{dR}{dQ} = p(Q) + Q \frac{dp}{dQ}
$$

### 微分法則

經濟分析中常用的微分法則包括：

#### 基本微分法則

1. **常數法則**：$(c)^{\prime} = 0$
2. **冪函數法則**：$(x^n)^{\prime} = nx^{n-1}$
3. **指數函數法則**：$(e^x)^{\prime} = e^x$，$(a^x)^{\prime} = a^x \ln a$
4. **對數函數法則**：$(\ln x)^{\prime} = \frac{1}{x}$，$(\log_a x)^{\prime} = \frac{1}{x \ln a}$

#### 運算法則

1. **加減法則**：$(f \pm g)^{\prime} = f^{\prime} \pm g^{\prime}$
2. **乘積法則**：$(fg)^{\prime} = f^{\prime}g + fg^{\prime}$
3. **商的法則**：$\left(\frac{f}{g}\right)^{\prime} = \frac{f^{\prime}g - fg^{\prime}}{g^2}$
4. **鏈式法則**：$(f(g(x)))^{\prime} = f^{\prime}(g(x)) \cdot g^{\prime}(x)$

### 經濟函數的微分應用

#### 需求函數的微分

考慮線性需求函數 $Q^d = a - bp$：
$$
\frac{dQ^d}{dp} = -b < 0
$$

這確認了需求法則：價格上升時需求量下降。

對於非線性需求函數 $Q^d = ap^{-\varepsilon}$：
$$
\frac{dQ^d}{dp} = -\varepsilon ap^{-\varepsilon-1} = -\varepsilon \frac{Q^d}{p} < 0
$$

其中 $\varepsilon > 0$ 為需求價格彈性。

#### 生產函數的微分

Cobb-Douglas 生產函數 $Q = AK^{\alpha}L^{\beta}$：

**對資本的邊際產品**：
$$
MP_K = \frac{\partial Q}{\partial K} = \alpha AK^{\alpha-1}L^{\beta} = \alpha \frac{Q}{K}
$$

**對勞動的邊際產品**：
$$
MP_L = \frac{\partial Q}{\partial L} = \beta AK^{\alpha}L^{\beta-1} = \beta \frac{Q}{L}
$$

!!! question "邊際分析"
    某公司的總成本函數為 $C(Q) = 100 + 10Q + 2Q^2$，需求函數為 $p = 50 - Q$。

    1. 求邊際成本函數 $MC(Q)$
    2. 求總收益函數 $R(Q)$ 和邊際收益函數 $MR(Q)$
    3. 找出利潤最大化的產量水準
    4. 計算最大利潤