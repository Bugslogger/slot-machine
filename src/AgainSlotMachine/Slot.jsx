import React, { useEffect } from "react";
import "./style.css";

/**
 * Hello,
 * This is Mr.Dark :)
 * if you have any doubt in understanding the code below.
 * please ask to me :)
 *
 */

// replace this array with you array of slot machine symbols
const items = [
  "data:image/jpeg;base64,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",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX/////qmT/kUstKymM126l63j/k0z/kkv/rmb/rGUrKikqKCb/lUz/r2YmKCj/j0n/mVMaFxT/pmAVIyckIR//nVcdGhcUEAwrJyiP3HAXJCchJSf/p2H/oFomIyEzMS/b29slGyRiYWAAGiMAHyaq83z29vYNCADAwL/l5eUlFySioqEAAAAMHSTYkln2jUqabEaIh4bzo2FjQzDnhUc+PDp6eXjKiVSzaz6dnJudYDqRkI/U09NtbGvUfER0TDOxsbB2sF5UU1JBNy62fU5VPS+FVDZ8WT2qZjznnF3Ec0BjYmE1OC6KwWZkhk0+TDVvpFlRZ0C9gVCNY0JuUTpIRkWMVzdbQC9Wd0ZmllJVbUORy2sgDyJJWTtsn1dASjUF+0YHAAAU2klEQVR4nN1daUPaShcWgoEkEMVgwKQFtMoi4oK4bwguF63d1Np7a+/9///iTZgzkwAhzIRA4H2+tGKteXL2MzNn5uamE4VyqXF2sdZ8zR0cFoJ+GN9RPj9bS22lk6msJEmcpB4E/UD+otxY49JqVuIspBtBP5R/KDTWUskudiZSe0E/l18onyWTWa4f6knQT+YP8oeq6kDPQLIR9LP5gcKemuqiJWYyq6sissPzoJ/OB1SSdvllMpuruT+//v72uUNRzQf9eCPj/DVteRdxdfPzP99+z8+vrEQ2zQ8kaeYD4olq+ZfMZubX0/zGxvxKJLJyjRjOejwsN5MWv/f/ruc35g0YBCMrf692gsVh0I84GkpWgMisfn/a6PDrEIysfM38H7jSBrHAzPufJ0QPCEYi751vFGfalZ4VsQBXuev5+S6CYIZcOuiHHAWHaeJgfs1vdBOMrPyTmXkztAh+JgpKCEYiXCcapktBP6Z3nGGCm39W+gmu/NvxpFxqdqPhCRAU37/Mz/dLcOVPR0mzF0E/p2dUwMmIm/9uOBHEfqYR9IN6RWkLJ2nXTgQjK98zKKGZVSUtpCRXgpEnJEL1LOgn9Yq1FKjoAIJghVy6HPSTesQJ5KLvjjZoWWFqVv3MORDc/OJMMBJBKSlXzAf9qB5xgIxw9btTmLCqitnNZ0BHM58HEXyC/oU6o1ZYgFC/6pSq2comTp3VNuIe8qOrHSPc2DBLwm6Cv5COSrkZjYV51aajG/9+/e9LD8FviCC3Nas59wUS4eaTyfDPeyaz+bWL4DU2wll1M3lkhZmOH/3eEdf7N1u29pvLzLaOzu2pKFv7TQgaFmkl3JHPiCCXnFUdnVM7sTDzz8b8BhDkNv8mReFvTDBdCfpBvaKBYuH7byJBw+dE+gjOrBHOzb0iEf7ZsAhmrnFn5hpskEs1g35ODyjnz8/PSw3kSN+fiIpmVp8wwW+rmODrLHkZc0H+8SCVRMCx0CKYAYIrkV+bKExw2Vkpewv5yl5TLaaTalbqXtdd/fIPJsiBiq48/QcfcdmZiBOF0tlaztxswDlB/C/TbYMrkS8Z+IhLHUx/vu2w26AHmOBmR0VXVq4/QyJjxMHmtEuwXDnY6t9t4MyzY4MGPyN3w59N+7aEcqVZVAewE0VZ7hGkoaIrkevvmxnrw1RjmkVYupCSffREUdeUavWTwrXeXuwUTQmu/P77q52fqaW5vXzQRAagcZBOdfMTZV3R9Nb9zY+jdi0khBLbVds3uafIv39WV7v5GZBSyWYjaDL9KJ+kesQn61pr//nHdi2RiMUEQQiFQsKNZhPhn6/v/fQQsmluypS1fCZ1WZ9oyO7t9HInloh1qAFiu3qXltpJ6You2r6UkgeV6eFY6OZn0NPvHnaiPB/qQezezrDrjVTvj57lqp2klMxNS3lRUe38ZI27u+TjfDQc/tDLMNGS+9mZ/OTnmqnKR/c5uySlJDcNNWLpwL4XRtf2j3fifNjEUi/BUKJLEYn4Wru1ROf7QiJ0dK/bORab+YD5lS/s/JTczzpvSs/AQj/BUKLaT4+7PwJ+HY6xRHuXUyyO2eReoOZYsW1Gk5XcQ5hH4jMIfuwnGEq8EDsUzUii6PdHIUM7u/6REAvdtKqWOqupRmD88k1LgKLSOsbiMwkuCw4MQ23DzgwoVUVvve0etRMJweHfCULi6E0hHKXiY0CpeMXarIX4hQkW4k78jGev7d7fP+/eHG23Tdfi/I9MxIQfrSrR1RTXCIBf4dESoJY73rHxC4ejfW6UPDrEfyfZdb+M0A2nYY5S+mLi1ljKEguUtZ9RSz8HeRlmGPa4qxO7TeUmvDPqZAsLUFTe6vFwFxaWfSBocky0X4hblYqNCfIrXOCdMJwuH0f5HoIDjNALR+FGJGJMT65yLL/iDb1idb9XgAbDgUboAbHaC/E46qSq/3wa+1BZfohH+wg6RcIRkDjisBizyfwkCJZIlaTd1vlefuGFRR9YGV7GynNitTcFG6M6AX9TIQSrd+F+gg75NjtiN2+3z23CUQg9Y02V1LHn4ngzGievH/drqD9+NLH7SZZ1fVfAKYGR4+AURxr3ig3Z8aq3+l2Mib6a0APanerCyJO2Scoaa99iY9wa6y4psl9Su9px0lBfYr1wBGYnV59DmKJQI1l7eoyHhAhB5SrqoKF+uZk2yda0W5s1vuDaa3yKeoJVVLlzMkGf3IxZZGHfaYjxxjLGZ5zgbDXGQ7BBCP501FDf0jUhdE+SNbG6TXL02C7+eDwZXAkf/Fg/HUAwHPaFoBkOj1rY6vRnq8iK3YCiSuNY5M/jdtP6X45O1D8RdjjW7j8heen3VuwPJW4+4biY95tgAQd65XgQwfCCbwQ7IRCJsXpjryQTu2CiUtbnHLXwCrmoMlhF2UT4YWlIYDEzGV2vvoS6auUYpuj3Sv8hVBPa3UCCbI50ObqwEHV/JUJs+/n5prcZEHsGW/R3W18FAqG+zw8IE2yx8AO/0PmRIRmQYPXhBCLKBG6c+xkWz2FfvX4bHkiQKZ1ZXGB8K7FarRbDXN+Aon8biAsc8jJyy6FaImDISD8uML4W4SZXze2CFIV2DrlZ/45ewmZCUXMjyFL4LlsMqbyTcGNUT2L1GeKGsA3FlF+m2AAjrA6OEyboCRIlpVVT4U1GgQMoJnDk9+fUVxkWdvU7N4JMOTejDIVQS0QZ3BHYYuIZLbX6s0MTzn7IrZ3BXoaxbFpitMMYVE6ith0DzreoIvbjPAbk26J26WKErJUvoy8l9ZScqyF3E9uGT4oj6yk+n6QMzEbptc0GunhIkPgBhie3IC7i9E3iRtVTSGb0fVeC7LX9sqERPP1rSewCRe0eTDEGejrq0S84viPKrkboqT3zgalaFp4hH8XeRmjDWnEqPxLDZhZ01NUI/eleuDMMYW+j19AnsRvEOfU4CsEScjPyrSs///vcjoBtDvqLAJxBT0dyNrAtVHH3o2Gf+jPuIA5VgdZN7Ag7G+8EK8gK9St3N+NLl/TDYjS66PqicA9D1NvgT0FxvR8VLuQ6IhSVIW7Gl/ZF1IgfC+6pnwB1k3wLOXgN5afeM3AQ4ZBQ6I8ZokRuyKuqoeyNq/5AeprYRcmb19kgBXQOUnRP1zoPNjJByHKGLK4KR6CnORT3BaAsvXpjCDWFNiRSGIgO23ZAzXBI1Ek8Iz3Vd1GVgbs2HmsMEGFuuAh9iIYoGR+WGgkhVPyKchuEmBtBiBAL9dNhVuhPn/TjgoGh/xEO8/o9Tk917zERpTOiNlSEPsX7Dx8/UiS3AoR5aPYLNRQks2vsBOGYoP5zqAj93ZowBLFtJET5BVkitswk+8YwdEyQoxChb8sVVMBh/lMbfV1DqzXskwchVOhuHWAMP9Z96dGugiWCO0VpALuvKaUpM9JJFBZdgI6wKKIaIwYxknn0IOogDi0qAmAotMGd7nYSG9ymYh2/UEDtJ214qPB1UY2OIrJEsYV6NjhgqGztDFBSvU7hZyZSHNqAqyYFrbvhYp+xwrjIIiWlEOHEGeKYqEPLJoH6xWxqWkBLMdoxhSf1ZzcpE8MfHSHi9W/4km1yHSjpOk0wnDzDkGA2NEgHXKh9YvemaDaHPKSFiDF5hm2xqnzaxVsY4KAKU18RhXs6JZ1Ik6aXYujHjbWXCI5TsZT6MH1EofGkgTA0V4dtX8ChP4b9GWjugdii4ueyMX9CwEGfoZlx2DFD/YpOSQNnGIqhAoMhXjSZzHAKGKJ4kaXegFKGlI3SDIOww24YaU3H1XC0RSKKhhQ9tqlhCD036oh4oiIzpIuGU8DQKItRRKTdYYMcDUUXEWHyOU0fICJSuxpwNA+zwxA2TtMW+gVYj7mkNMMpYAib32lrxHIRdQloHc3EqycHxNBU5S06Z4pdKa2jmXSN7wRIvimdKcrZaAuLKWGInCll3gbBYvBW2V6Gk+1EOQLyNspwAcGCMmcLT7pf6giYuEE53AYtWNB0SqeHIXSnKJcvUPlLWxyG/d3B7hFQIlIWwWifF12PBjEMPiBCr0aSqBiidcN1aoLTEBCFEOpGJWkIohm4ok5thlPhTAXEsMjAkKNnOA2uRmDomZYRwxwDw2lwNSKqEGkSU2DYYmE4Ba4GbVmgGlLvhWHwribWomeY98AweFeDGebHI8NwNGiCTDL0wjB4QxTYGbL40ikooFg8jYd4GA77N87EK0OGaDEHuzCYGE6ko/hxcXGgrrBE/DmW1VGiphOIF4vmzrcB6RPOS+kYorN4VfrqKTyReLHkuscW7SOi3PKNJm4zVMCd3zx2hnAczFmIuD6ka5iuoRqftiEMDMeupsDQ2aex1fh7rH0a9G5H3yfsDlctZevTVFCvbdBoiEFCHHvQd/M0sHBB2WuDfin10hMwHH/QN6LFIFtg65eeM/a8AYGWwQmmBUS0IUoU2QgGWkIJIZTSbFHu3kNHZajXnqZAiMI2WubO0RH0Fi4CFSJbsMDhgn7hIngh4jVg2vP5rItPRIiBVYlsrpT0MYYflpkWIeKjM1Q9DBNwKo8xMw1QiDgrpZ8/gFwNxXmgXoYBdaTADBkOzpypyBBZtTQodyq8sG4wRWO9RJ3ZEIOxRKGGdmIwDAAroBPOzBFx3Nnp0iLPL/bbOhy8lCSG8wjNrLeION5TXssL5lnh/peIzZBlNhYqoJiT7/BYnQ2e+dJHEdJu6l1tJvKwSsrUq4HfPy5n84GMfOnZOi+0UReKbWwUMkSaw4d9GJezGTi2B44gUq5wY5ylkJqyExybsxk0eokc7WIbcnKO1JR6f2IXxfFkNssDGOJjUEW243n4gCVjKwMwFn9qG4HWZer4iCXrbXRwlybHHvR9HcpuB1GnLksXamhbIvNkszxMjGDsKQLFsZji0gLqJ3ZbgQDn19mHmaOgL795YTgmU1ziO/3EnliBzuYxhXsEuC+UvYRCGAdDg2PfmX18IsjD8A/YC81e6SMhTmpBEY5XckkPI7/g9myPQpxQqYhF6OlOwTLMxfAWMCa08I2n8RU93bUDIy91t4mXrhTHvVbT6ZOifMbbcMFzLERvDCdR8OOL3BjzGYJHNKyt+4QXH49TbwAfN0U8fCDrdWTbucOoL/7y59Wxy6zdbopj7r3hKSBJz/d6wMS9dcud8g+Krlf3J0BxmeeHuWM8EsNDtCdCRMfyjSIKM4p2ZqVo1P7Vs6IudoabuabwuGzitka4muWxZzwGf4kUvzp0wBmh6C1oLFEMxorBLLORBieiHWCcKIOzidZhnNiQea1dFL0EDdeNFwhCW0YipNrpNRAwaYhEjDiMaZJbzneUOFH0kt1QMMTBfsSB0LCEwa1DsR+tw4sbMlZ4VIru24M6BMHNjDwsGUoMUgrzD3Dhrf42eAB9L0We3aV2hpu5vhpU+HqeKGgBIoalp6cwDFa7oqYYDrO71KXlZbcfwjo6QqTAKMNMfTIfkt+HsfbaHT1Fv0sNcs8F5ZlKV8AdVsR9RnfwnbcKC0UPmjoYZNi1PzcjgZ4S38LXcx4oetHUgajBS/ZBR02U4YYZkp/y2KFyCostLriPmGUAzkcl1acrWPHVAZYpXuI7p7Q36rjouGzkjSAe7u19vG4vLlDcF3XcAo8/4IuXddc7L/o4+mGNsSP45aoPQ/UBhYMsZG+XfRRl7pKlzTG6quK6nsuydrndgC97EklLw1JUUTtl8TcL4dFUNYZnsft85RM2RTmHKcYvdXzrsrLPYIwjchTa2JH7c3uHBXxtnnyL81G+bt0c1rocdNWcM8foskddFWq3mKDv1yA+qjgfxRcD8jvk1kVZ++l4Y6fvchTwPUE+ehmCJlzirJMeBh++Itf46Tk2MZqhg9mvWhch+X1jVwfYoRpSxGYX5U/JZYyicldn5RhnS3MMFQWCvrpRC2W49onTrVty4w/ksl5Ol0/ZVNU0SIftMYMQa2PDpx8IxUoR359neVTTGK3bGDXzDnm2JdUFapIx4kUlD2ORKZHPYopWnyYaPyVhw1BV8ZhVjmFzTXC4Tca2yYW52fy4CM7NncOFF2YCRzKZeP2NiNG849bLsrEpyuUllxCSwKkaJ0ljvdeZ3GQp6qfEr/DRvzRijZxYZd61iUUZ5uPLH5eWQn3dOSGxSwj6f3tlN8ocvnbcnsnw9SvFUlXqUXbOPBcMH724uGzgowHjj8XFnX2sJdlxORkbxdcU9p22nDsav7Q8joc9jY5MAUYOTBx26nXsBI242FSJzdlybj563AKOGutJDVcYQZe8O7U5ljjYhwt8tbOpqZbN8eHjnCKLon47uggtxA0Nxb8uPYZUzRlnaXyDvC4bEdB62/xxS5b3vewyGgDjf5Sxhkr+J9uDUcpifyMqb5e2IM/H64y5mxui/KUViLLZMdxyPBjlV2yMZl1hLw+dryT3BH7np0Y8tDoJH2NH4bCINdVwdA/UK98M/Ow5r1Q8nIyPsaOUxWHDCPKGqvrLkTcUtEoypdRkNRSj/EgcDidX9/3kaPDbrxIFldKPE9ZQgkaSiNEwxze/dNXQzzfLALnU6MtL3lG4sMTIyUrrIcpYPPXD+B8eWlYKaApw8hZoR+kg2cXxtM5aIXbT4+unXfySB4FYoB2Fk5SlqkbWre0f73jUVj6+c7yvkb6IqaCpk2AFiFA+3LJxNAySu3rg44ySjBo/8XDF2czP4Ld1GJSH6UX5QrVzFHVFuzquh2n11dDNcP34SlN00c5PvZgWfibyh0k7R06UtfXWncEybtAczDNqkIsb7O5a65psp2c40MN80KR6UN5TbT4HiVLTbq9OH+o78bhB1KTaIWv+YX5pfLpTfzi9utW0LuGZ/kXdmyb5YRQqUjrVTZKTZV3Rudb+3V/HD5f1+s6OUWPt7NTrlw/Hf93ttzjju7Lc/SNSKi1VpsG/OKJ0ISWzXC9EUTbEqSjKOobxd0Nwsij2/dtsUroIPD64olxZSzqQpEM2mVyrTKN69qDcaG71qetQGMq51WzMAD2EQukwpyZTEh1NSUol1dxhaWqNbwDyjcOmlE6msm40pWwqmZaah4180I/rEeXzyt5arlhMJ1WDKRGp8bdsSk2mi8Xc2l7lfGZUcxAKhXKpUTk7XGu+HuRyXC538NpcOzyrNErlwgQU83/mg6/7yNAPMwAAAABJRU5ErkJggg==",
  "https://www.clipartmax.com/png/middle/125-1258400_slot-machine-icons.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0h8DKWIVRdwIMy6-5HbbZZAPoFLbSHRTajw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXews5MzHZKcK-mOBQMwOas3rQGzV7ckYcgQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwQ5DkOPmIawl7e0pPGIoF6GwCXuteXMDfw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9hgWizXshK_Gh1eZjpzMThWFRrGnE-Tg-w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lyRNGpDY5_edecxGRJ0Q2CjNPb6ie6JUmpmhf1ZY8YIFQgZERabqAfgqIWFQf9iE8XU&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRGVeLYTwxu62NgZAhcTeaGdQUNphiGO9YJPIB1yVI5pBth5aomIKyOF8vGEI2KVJiNA&usqp=CAU",
  "data:image/jpeg;base64,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",
  "data:image/png;base64,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",
  "https://www.clipartmax.com/png/middle/125-1258400_slot-machine-icons.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0h8DKWIVRdwIMy6-5HbbZZAPoFLbSHRTajw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXews5MzHZKcK-mOBQMwOas3rQGzV7ckYcgQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwQ5DkOPmIawl7e0pPGIoF6GwCXuteXMDfw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9hgWizXshK_Gh1eZjpzMThWFRrGnE-Tg-w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lyRNGpDY5_edecxGRJ0Q2CjNPb6ie6JUmpmhf1ZY8YIFQgZERabqAfgqIWFQf9iE8XU&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRGVeLYTwxu62NgZAhcTeaGdQUNphiGO9YJPIB1yVI5pBth5aomIKyOF8vGEI2KVJiNA&usqp=CAU",
];
// document.querySelector(".info").textContent = items.join(" ");

/**
 * this is value getting from backend
 * just assign value you get from backend to variable "getValueFromBackendAsString"
 */
const getValueFromBackendAsString = "143";

const Slot = () => {
  useEffect(() => {
    /**
     * calling function will display the initial image/symbol in slot box.
     * if you comment it, you box will be empty onload.
     */
    init();
  }, []);

  /**
   * if x starts from 3 that means it will display element from back of array
   * if it starts from 0. it will display elements from 0 index of array
   *
   * NOTE: if you change x to 0. then you need to change
   * x-- with x++
   * and x-1 to x
   *
   * in the below code
   */
  let x = 3;

  function shuffle([...arr]) {
    let m = 30;

    /**
     * this shuffle elements of array and returns new array
     * from this new shuffled array the last element of array is displayed as final result.
     */
    while (m) {
      const i = Math.floor(Math.random() * m--);
      console.log("i: ", i);
      [arr[m], arr[i]] = [arr[i], arr[m]];
      //   console.log(([arr[m], arr[i]] = [arr[i], arr[m]]));
    }

    /**
     * here this will diplay the final result on the screen
     * no matter what above code does.
     */
    arr[arr.length - 1] = items[getValueFromBackendAsString[x - 1]];
    x--;

    // this return shuffle array
    //  but this also doesn't matter but do not remove it.
    return arr;
  }

  /**
   *
   * @param {boolean} firstInit
   * @param {number} groups
   * @param {number} duration
   * @returns
   *
   * This is very important function
   * this function is responsible for rolling, shuffling and diplaying the final result on screen.
   *
   */
  function init(firstInit = true, groups = 1, duration = 1) {
    const doors = document.querySelectorAll(".door");

    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);

      // image/symbol displayed when page is loaded you can change it according to what you have to display
      const pool = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiEo7S73bvAOM2eE18ApU5j2NLNTO2iTkcA&usqp=CAU",
      ];

      if (!firstInit) {
        console.log(firstInit);
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }

        pool.push(...shuffle(arr));
        console.log("Pool: ", pool);
        boxesClone.addEventListener(
          "transitionstart",
          function () {
            // do not change it's value.
            door.dataset.spinned = "2";

            this.querySelectorAll(".box").forEach((box) => {
              box.style.filter = "blur(1px)";
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          "transitionend",
          function () {
            this.querySelectorAll(".box").forEach((box, index) => {
              box.style.filter = "blur(0)";
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }

      // creating image symbols inside box grid
      // i.e appending images from array into box
      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("img");
        console.error("Index: ", i);
        // const att = document.createAttribute("src");

        box.classList.add("box");
        box.style.width = "100%";
        box.style.height = "auto";

        box.setAttribute("src", pool[i]);
        boxesClone.appendChild(box);
      }

      /**
       * responsible for rotating/spinnig images and display it inside box
       */
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
    }
  }

  // this function is will start you slot machine
  async function Shuffle() {
    const doors = document.querySelectorAll(".door");

    init(false, 1, 2);
    /**
     * responsible for rotating/spinnig images and display it inside box
     */
    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = "translateY(0)";
      await new Promise((resolve) => setTimeout(resolve, duration * 80));
    }
  }

  return (
    <div id="app">
      <div className="doors">
        <div className="door">
          <div className="boxes"></div>
        </div>

        <div className="door">
          <div className="boxes"></div>
        </div>

        <div className="door">
          <div className="boxes"></div>
        </div>
      </div>

      <div className="buttons">
        <button onClick={Shuffle} id="spinner">
          Spin
        </button>
        <button onClick={init} id="reseter">
          Reset
        </button>
      </div>

      <p className="info"></p>
    </div>
  );
};

export default Slot;


/**
 * Krupya baki cheezon ko na chede
 * - MrDark :)
 */