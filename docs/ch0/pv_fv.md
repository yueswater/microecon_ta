# 現值與未來值

以利率 $r$ 為貼現率，時間價值可用離散/連續複利表示；年金、成長年金與永續年金皆有封閉解。

!!! note "單筆金額的現值與未來值 (離散/連續)"
    離散複利 (每期利率 $r$、$n$ 期) ：
    $$
    FV = PV\,(1+r)^n,
    \qquad
    PV = \frac{FV}{(1+r)^n}.
    $$
    連續複利 (連續利率 $r$、時間 $t$) ：
    $$
    FV = PV\,e^{rt},
    \qquad
    PV = FV\,e^{-rt}.
    $$

!!! note "等額年金與永續年金 (離散時間)"
    等額年金 (每期收 $A$，共 $N$ 期) ：
    $$
    PV_{\text{annuity}}
    =
    A\,\frac{1-(1+r)^{-N}}{r},
    \qquad
    FV_{\text{annuity}}
    =
    A\,\frac{(1+r)^N-1}{r}.
    $$

    成長年金 (首期 $A_1$、成長率 $g$，$r\neq g$) ：
    $$
    PV_{\text{g-annuity}}
    =
    A_1\,\frac{1-\big(\tfrac{1+g}{1+r}\big)^N}{\,r-g\,}.
    $$

    永續年金：
    $$
    PV_{\text{perp}}=\frac{A}{r},
    \qquad
    PV_{\text{g-perp}}=\frac{A_1}{\,r-g\,}\ \ (r>g).
    $$

**NPV 與貼現因子**：

- NPV：$\text{NPV}=\sum_{t=0}^N \frac{C_t}{(1+r)^t}$
- 設貼現因子 $\beta=\dfrac{1}{1+r}$，則 $\text{NPV}=\sum_{t=0}^N \beta^t C_t$
- 連續時間：$PV=\int_0^T f(t)e^{-rt}\,dt$

!!! question "年金與投資決策"
    1. 給定 $A=100$、$r=5\%$、$N=10$，求 $PV_{\text{annuity}}$ 與 $FV_{\text{annuity}}$。  
    2. 一專案現金流 $C_0=-800,\ C_1=\cdots=C_5=200$；$r=8\%$，計算 NPV 並判斷是否投資。  
    3. 連續收入流 $f(t)=\alpha e^{gt}$ ($0\le t\le T$) ，$r>g$，求其現值。  