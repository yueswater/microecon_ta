# 泰勒級數與泰勒展開

泰勒展開提供了以**局部低階多項式**近似函數的工具，是做線性化 (first-order approximation) 與二階比較靜態的基礎。

!!! note "一變數泰勒展開"
    對 $f:\mathbb{R}\to\mathbb{R}$，在 $x_0$ 的 $n$ 階泰勒展開：
    $$
    f(x)
    =
    \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
    \;+\;
    R_{n+1}(x),
    $$
    其中 (Lagrange 餘項) 存在某 $\xi$ 介於 $x$ 與 $x_0$ 使
    $$
    R_{n+1}(x)=\frac{f^{(n+1.}(\xi)}{(n+1.!}(x-x_0)^{n+1}.
    $$

!!! note "多變數泰勒展開"
    對 $f:\mathbb{R}^n\to\mathbb{R}$，在 $\mathbf{x}_0$ 的二階展開 (忽略高於二階的小量) ：
    $$
    f(\mathbf{x}_0+\Delta\mathbf{x})
    \;\approx\;
    f(\mathbf{x}_0)
    + \nabla f(\mathbf{x}_0)^\top \Delta\mathbf{x}
    + \tfrac{1}{2}\,\Delta\mathbf{x}^\top H_f(\mathbf{x}_0)\,\Delta\mathbf{x},
    $$
    其中 $\nabla f$ 為梯度、$H_f$ 為 Hessian 矩陣。餘項可寫為 $o(\|\Delta\mathbf{x}\|^2.$。

**常見用法**：

- **線性化**：只取一階項，用於敏感度與彈性近似。  
- **二階近似**：加入曲率項，用於福利變化的二階近似、最適化的充分條件判別。  
- **對數線性化**：套用於 $\ln f(\cdot)$，利於彈性解讀。

!!! question "泰勒近似的誤差控制"
    1. 用一階展開近似 $f(x)=\ln x$ 於 $x_0=1$；上界化 $|R_2(x)|$。  
    2. 對 $f(x,y)=\sqrt{xy}$ 於 $(1,1.$ 做二階展開 (寫出梯度與 Hessian 矩陣) 。  