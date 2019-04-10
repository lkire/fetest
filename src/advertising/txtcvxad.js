export default  String.raw`
## Cost-per-click Model

Cost-per-click advertising pays the *publisher* (a website) when an ad is clicked.
In the model simulated above, there are independent contracts for each advertisement
that specify the cost $C_i$ paid to the publisher each time an advertisement $i$ is clicked by a visitor.
Each contract also comes with a specification of the minimum number of ads $m_i$ to show
each day and the maximum available daily budget $B_i$. Together these variables
are the three columns of sliders above.

Given this type of contract it is natural for the publisher to ask the question: 
> **'How can we maximize our ad revenue?'** 

The answer depends not only on the constraints specified but also on the 
expected chance $p_t$ of a customer clicking an advertisement and the expected
number of hourly visitors $v_t$. Each are parameterized by hour $t$ and in this
example are fabricated--refer to the tabs above to see the data.

This is clearly a simplified problem, not taking into account relevant aspects
like customer profiling and uncertainties on predictions.

## Convex Optimization
As described, maximizing ad revenue is a convex optimization problem that can 
be solved *efficiently*. 

`;