# 彈性應用

彈性的概念不僅具有分析上的意義，更在實務層面具有廣泛的應用。廠商在制定價格策略時，往往需要根據需求彈性來判斷是否調價能帶來收益的提升。此外，透過彈性分析，我們亦能理解總支出或總收入如何隨價格變動而改變，進而預測政策或市場變動對總體銷售的影響。本節將探討訂價策略、總支出與總收入的關係，並說明彈性在決策應用中的角色。

## 訂價策略

利用彈性的性質，可以分析商品的價格變動對於消費者**總支出** (total expenditure) 的影響，又或是換一個面向來看，即是生產者的**總收入** (total revenue)。

### 總支出或總收入函數

總支出或是總收入可以表達為價格乘上數量，即：
$$
TE = p \times Q \quad \text{或} \quad TR = p \times Q
$$
為了方便討論，以下皆以生產者的視角分析，使用總收入函數。假設需求函數為 $Q = Q(p)$，或表達為反需求函數 $p = p(Q)$，則總收入函數可區分為底下兩種表達方法：

- 為價格的函數：$TR = p \times Q = p \times Q(p)$

- 為數量的函數：$TR = p \times Q = p(Q) \times Q$

兩種表達意義實際上是相同的，但是因為分析標的不同，彈性主要探討價格變動對於數量的影響，因此採用第一種形式，即總收入函數為價格的函數，而後者則需待產業分析方會使用。

### 總收入與需求彈性之關係

重述總收入函數的形式：
$$
TR = p \times Q(p)
$$
將其對價格微分後可得：
$$
\begin{aligned}
    \dfrac{dTR}{dp} &= Q(p) \cdot \dfrac{dp}{dp} + p \cdot \dfrac{dQ}{dp}\\\\
    &= Q + p \cdot \dfrac{dQ}{dp}\\\\
    &= Q \left(1 + \dfrac{dQ^{d}}{dp} \cdot \dfrac{dp}{dQ^{d}}\right)\\\\
    &= Q \cdot (1 - \varepsilon_p^{d})
\end{aligned}
$$
上式的 $\frac{dTR}{dp}$ 代表價格變動對於總收入的影響。此外，在分析中，鮮少會討論非正數的數量，因此 $\frac{dTR}{dp}$ 的正負需視 $\varepsilon_p^{d}$ 而定。

1. **需求彈性大於 1**：隱含 $\frac{dTR}{dp} < 0$，代表消費者的總支出會與價格變動方向呈反向變動，亦即當生產者銷售商品的需求彈性大於 1 時，為增加收入，應採用**降價策略**。

2. **需求彈性等於 1**：此時 $\frac{dTR}{dp} = 0$，消費者的總支出不會受到價格變動的影響，無論生產者訂價策略為何，總收入不會變動。

3. **需求彈性小於 1**：隱含 $\frac{dTR}{dp} > 0$，代表消費者的總支出會與價格變動方向呈同向變動，亦即當生產者銷售商品的需求彈性小於 1 時，為增加收入，應採用**漲價策略**。

由上述說明，可以將其結論表格化如下：

|需求彈性大小| $\varepsilon_p^{d} > 1$ | $\varepsilon_p^{d} > 1$ | $\varepsilon_p^{d} > 1$ |
|----------|------|----------|----------|
| 價格上漲 | 總支出減少 | 總支出不變 | 總支出增加 |
| 價格下跌 | 總支出增加 | 總支出不變 | 總支出減少 |

!!! question "彈性應用：訂價策略"
    美國許多書商在出書時，多半都先出售精裝版 (hard–backed)，再出平
    裝版 (paper–backed)，試以需求彈性分析此現象。

    **【解】**

    - 甫出書：無論再貴都願意買，代表 $\varepsilon_p^d < 1$，因此訂定高價出售。
    - 上市一陣子：市場上出現許多替代書籍，代表 $\varepsilon_p^d > 1$，因此訂定低價出售

!!! question "彈性應用：中點訂價"
    試證明需求函數為負斜率直線型時，生產者於需求函數之中點訂價可使收入極大。

## 彈性性質

為了更深入理解彈性的數學與經濟含義，我們需進一步探討其推導公式與理論性質。彈性不僅可透過點與弧的方式計算，其交叉彈性與所得彈性亦能揭示商品間的替代與互補關係。此外，彈性與需求函數的關聯，也反映在個人與市場層次上的變動。最後，透過庫諾加總、恩格爾加總與外生變數分析，從而完整掌握彈性在均衡理論中的角色與限制。

### 彈性的另類計算方法

由對數函數微分的基本性質
$$
d \ln x = \dfrac{dx}{x}, \quad d \ln p_x = \dfrac{dp_x}{p_x}
$$
我們即可得需求價格彈性的定義可以變化為：
$$
\varepsilon_x^d = \frac{dx}{dp_x} \cdot \frac{p_x}{x}
= \frac{dx}{d \ln p_x} \cdot \frac{1}{x}
= \frac{d \ln x}{d \ln p_x}
$$
化為：
$$
\varepsilon_x^d = \frac{dx}{dp_x} \cdot \frac{p_x}{x}
= \frac{d \ln x}{d \ln p_x}
= \frac{dx}{d \ln p_x} \cdot \frac{1}{x}
$$
因此同理交叉彈性與所得彈性亦可定義為：

#### 交叉彈性
$$
\varepsilon_{xy}
= \frac{dx}{dp_y} \cdot \frac{p_y}{x}
= \frac{x}{dp_y} \cdot \frac{1}{x} \cdot p_y
= \frac{d \ln x}{d \ln p_y}
= \frac{dx}{d \ln p_y} \cdot \frac{1}{x}
$$

#### 所得彈性

$$
\varepsilon_{xM}
= \frac{dx}{dM} \cdot \frac{M}{x}
= \frac{d \ln x}{d \ln M}
= \frac{dx}{d \ln M} \cdot \frac{1}{x}
$$

!!! question "彈性的另類計算方法"
    設某消費者對 $x$ 商品的需求函數為：
    $$
    \ln x = (-0.5) \cdot \ln p_{x} + 0.3 \cdot \ln p_{y} + 0.2 \cdot \ln M
    $$
    求 $x$ 商品的需求價格彈性、所得彈性與對 $y$ 商品價格的交叉彈性各為何？

### 個人與市場需求彈性

假設社會中有 $n$ 位消費者，每人對價格 $p$ 的需求函數為 $q_i(p)$，則市場總需求為：
$$
Q(p) = \sum_{i=1}^n q_i(p)
$$
對上式兩邊對 $p$ 微分，可得：
$$
\begin{aligned}
\frac{dQ}{dp}
&= \sum_{i=1}^n \frac{dq_i}{dp} \\\\
\Rightarrow \quad
\frac{dQ}{dp} \cdot \frac{p}{Q}
&= \sum_{i=1}^n \frac{dq_i}{dp} \cdot \frac{p}{Q} \\\\
&= \sum_{i=1}^n \left( \frac{q_i}{Q} \cdot \frac{dq_i}{dp} \cdot \frac{p}{q_i} \right) \\\\
&= \sum_{i=1}^n \left( \frac{q_i}{Q} \cdot \varepsilon_p^i \right)
\end{aligned}
$$
因此，市場需求價格彈性為：
$$
\varepsilon_p^d = \sum_{i=1}^n \theta_i \varepsilon_p^i
$$
其中 $\theta_i = \frac{q_i}{Q}$ 為佔比，並滿足：
$$
\sum_{i=1}^n \theta_i = 1,\quad 0 \leq \theta_i \leq 1
$$

!!! question "個人與市場需求彈性"
    Microsoft 想要計算在全球對其 Excel 銷售實施 5% 降價後的銷售變化效果。Microsoft 在美國、日本與歐洲以不同價格銷售 Excel。在降價前，美國的銷售量是日本與歐洲的兩倍。
    若美國、日本與歐洲的需求價格彈性分別為 -3、-4 與 -2，則全球總銷售量將上升多少？

    1. 10%  
    2. 15%  
    3. 20%  
    4. 25%  
    5. 以上皆非

### 庫諾加總性質 (Cournot Aggregation Condition)

假設市場中僅有 $x$ 與 $y$ 兩種商品，預算限制式為：
$$
p_x \cdot x(p_x, p_y, M) + p_y \cdot y(p_x, p_y, M) = M
$$
對 $p_x$ 兩邊微分，有：
$$
\begin{aligned}
&\frac{d}{dp_x} \left( p_x \cdot x + p_y \cdot y \right) = \frac{dM}{dp_x} = 0 \\\\
\Rightarrow\quad
&x + p_x \cdot \frac{\partial x}{\partial p_x} + p_y \cdot \frac{\partial y}{\partial p_x} = 0
\end{aligned}
$$
兩邊同除以 $M$ 並整理得：
$$
\frac{p_x \cdot x}{M} \left( 1 + \frac{\partial x}{\partial p_x} \cdot \frac{p_x}{x} \right)
= -\frac{p_y \cdot y}{M} \cdot \left( \frac{\partial y}{\partial p_x} \cdot \frac{p_x}{y} \right)
$$
亦即：
$$
\beta_x \cdot (1 - \varepsilon_x^d) = -\beta_y \cdot \varepsilon_{yx}
$$
其中：

- $\beta_x = \dfrac{p_x x}{M}$ 為商品 $x$ 在總支出中的支出比重  
- $\varepsilon_x^d = -\dfrac{\partial x}{\partial p_x} \cdot \dfrac{p_x}{x}$ 為商品 $x$ 的自價格彈性  
- $\varepsilon_{yx} = \dfrac{\partial y}{\partial p_x} \cdot \dfrac{p_x}{y}$ 為商品 $y$ 對於 $x$ 價格的交叉彈性

庫諾加總性質的經濟意義在於，當經濟社會僅有 $x$ 與 $y$ 兩種商品時，若其中 $x$ 商品的需求價格彈性大於 $1$，表示若 $x$ 價格上漲時，則其需求量會大量減少，在 $y$ 商品價格及所得不變且所得必須消耗完畢的情況下，隱含 $x$ 商品此時的支出會減少，$y$ 商品的消費量就會比之前來的更多，則 $x$ 與 $y$ 兩商品之間的關係必為替代；反之當 $x$ 商品的需求價格彈性小於 $1$，則 $x$ 價格變動後，$x$ 與 $y$ 商品之關係必為互補。

### 恩格爾加總性質 (Engel Aggregation Condition)

假設市場僅有 $x, y$ 兩種商品財貨，由預算限制式（budget constraint） $p_x \cdot x + p_y \cdot y = M$ 可將其改寫為：
$$
p_x \cdot x(p_x, p_y, M) + p_y \cdot y(p_x, p_y, M) = M
$$
式中兩邊對所得微分，
$$
p_x \cdot \frac{\partial x}{\partial M} + p_y \cdot \frac{\partial y}{\partial M} = 1
$$
可調整為
$$
\left( \frac{p_x \cdot x}{M} \right) \left( \frac{\partial x}{\partial M} \cdot \frac{M}{x} \right) +
\left( \frac{p_y \cdot y}{M} \right) \left( \frac{\partial y}{\partial M} \cdot \frac{M}{y} \right) = 1
$$
經過整理可得
$$
\beta_x \cdot \varepsilon_x^M + \beta_y \cdot \varepsilon_y^M = 1
$$
其中 $\varepsilon_x^M$ 與 $\varepsilon_y^M$ 代表 $x$ 與 $y$ 商品的所得彈性，$\beta_x, \beta_y$ 則分別表示為 $x$ 與 $y$ 商品之總支出佔所得的比例，且滿足 $0 \leq \beta_x \leq 1,\, 0 \leq \beta_y \leq 1$ 及 $\beta_x + \beta_y = 1$。

式中由於 $\beta_x, \beta_y$ 皆為介於 $0$ 到 $1$ 之間的正數，此表示若社會僅有 $x$ 與 $y$ 兩商品，且必須滿足預算限制式所代表的所得分配條件下，則不可能同時 $x$ 與 $y$ 兩商品皆為劣等財（因為 $\varepsilon_x^M, \varepsilon_y^M$ 皆不可能同時皆為負值）或是奢侈多品（因為 $\varepsilon_x^M, \varepsilon_y^M$ 不可能同時皆為大於 $1$ 之數值）或必需品（因為 $\varepsilon_x^M, \varepsilon_y^M$ 不可能同時皆為小於 $1$ 之間的數值），但可能兩種商品同時為正常財，或一為正常財、一為劣等財之情況。直覺而言，當我們所得增加之後，在所得必須耗盡的條件下，我們可能兩種商品同時都增加購買，或一增一減，但不可能同時兩商品都減少購買或大量增加購買量。

依據前述推導過程，我們亦可推導出具有 $N$ 種商品時之數學式會滿足
$$
\sum_{i=1}^n \beta_i \cdot \varepsilon_i^M = 1
$$
三種商品以上之情況，仍符合不可能所有商品皆為劣等財或奢侈品的條件；但其餘的狀況就有多種組合，因篇幅關係在此不贅述，請自行證明。

### 恩格爾法則 (Engel's Law)

表達商品支出比例與所得變動之間的關係法則。若假設 $x$ 商品的支出比例為 
$$
\beta_x = \frac{p_x \cdot x}{M} = \frac{p_x \cdot x(p_x, p_y, M)}{M}
$$

兩邊對所得 $M$ 微分：

$$
\begin{aligned}
\frac{d\beta_x}{dM}
&= \frac{p_x \cdot \frac{\partial x}{\partial M} \cdot M - p_x \cdot x}{M^2} \\\\
&= \frac{p_x \cdot x}{M^2} \cdot \left( \frac{\partial x}{\partial M} \cdot \frac{M}{x} - 1 \right) \\\\
&= \frac{p_x \cdot x}{M^2} \cdot \left( \varepsilon_{xM} - 1 \right)
\end{aligned}
$$

可得結論有：

- 當所得彈性 $\varepsilon_{xM} > 1$ 時，得 $\dfrac{d\beta_x}{dM} > 0$，表示所得愈高支出比例會愈高。
- 當所得彈性 $\varepsilon_{xM} = 1$ 時，得 $\dfrac{d\beta_x}{dM} = 0$，表示支出比例不受所得變動影響。
- 當所得彈性 $\varepsilon_{xM} < 1$ 時，得 $\dfrac{d\beta_x}{dM} < 0$，表示所得愈高支出比例會愈低。

### 外生變數變動對商品均衡價格的影響

設供需模型如下：
$$
\begin{aligned}
Q^d &= Q^d(p, M)\\\\
Q^s &= Q^s(p)
\end{aligned}
$$

並設供需符合需求法則與供給法則，即：
$$
\frac{\partial Q^d}{\partial p} < 0, \quad \frac{dQ^s}{dp} > 0
$$
均衡時必滿足 $Q^d(p, M) = Q^s(p)$。對此式全微分可得：
$$
\frac{\partial Q^d}{\partial p} \, dp + \frac{\partial Q^d}{\partial M} \, dM = \frac{dQ^s}{dp} \, dp
$$
整理後得：
$$
\frac{\partial Q^d}{\partial M} \, dM
= \left( \frac{dQ^s}{dp} - \frac{\partial Q^d}{\partial p} \right) dp
$$
再整理可得：
$$
\frac{\partial Q^d}{\partial M} \cdot \frac{M}{Q} 
= \left( \frac{dQ^s}{dp} - \frac{\partial Q^d}{\partial p} \right) \cdot \frac{p}{Q}
$$
故可得 $\varepsilon_M \cdot \dfrac{dM}{M} = (\varepsilon_p^s + \varepsilon_p^d) \cdot \dfrac{dp}{p}$，因此可得：
$$
\frac{dp}{p} = \frac{\varepsilon_M}{\varepsilon_p^s + \varepsilon_p^d} \cdot \frac{dM}{M}
$$
即可得當所得變動某特定百分比時，對均衡價格的變動影響百分比。同理若我們分析的外生變數為供給面的部分亦可得到商品市場均衡價格變動百分比。

[^1]: 注意到，$\varepsilon_{xy}$ 與 $\varepsilon_{yx}$ 的值不一定會相同，例如衡量肯德基降價對麥當勞的影響，與麥當勞降價對肯德基的影響，不應武斷地認定兩者一定相同。