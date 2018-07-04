const icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTIzNjA5Mzc0ODc3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NjEwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTUuMDA4IDExNi44NjRjODEuNzI4LTM2LjkyOCAxNTUuMjY0LTcwLjMzNiAzMDYuNjg4IDE5LjkwNGgyMS4wNTZjMTUxLjQyNC05MC4yNCAyMjQuODk2LTU2LjgzMiAzMDYuNjg4LTE5LjkwNCA2Ni4zNjggMzAuMjcyIDgyLjg4IDMzLjYgMTU1LjU4NCAzMy42IDIxLjYzMiAwIDM5LjQyNCAxNy42IDM5LjQyNCAzOS43NDRsLTAuMjU2IDczOC44OGMwIDIwLjE2LTE1LjM2IDM3LjMxMi0zNi4wOTYgMzguOTEyLTg0LjY3MiA3LjU1Mi0xMzkuNTg0LTE3LjM0NC0xOTAuOTc2LTQwLjU3Ni02Ni4zNjgtMjkuMzc2LTEyNS41NjgtNTcuMzQ0LTI2My42MTYgMzQuMTEyYTM4LjU5MiAzOC41OTIgMCAwIDEtNDIuNDMyIDBjLTEzNy45ODQtOTEuNTItMTk3LjMxMi02My40ODgtMjYzLjYxNi0zNC4xMTItNTEuNDU2IDIzLjIzMi0xMDYuMzA0IDQ4LjEyOC0xOTAuOTc2IDQwLjU3NmEzOS4wNCAzOS4wNCAwIDAgMS0zNi4xNi0zOC45MTJMMCAxOTAuMjA4YTM5LjY4IDM5LjY4IDAgMCAxIDM5LjQyNC0zOS43NDRjNzIuNzA0IDAgODkuMzQ0LTMuMzkyIDE1NS41ODQtMzMuNnogbS00MS4yOCA1NTkuMDRjMCAxOS4xMzYgMTUuNjE2IDM0Ljc1MiAzNC42ODggMzQuNzUyaDE3MC4xMTJhMzQuODE2IDM0LjgxNiAwIDAgMCAzNC42ODgtMzQuNzUydi0wLjA2NGEzNC44MTYgMzQuODE2IDAgMCAwLTM0LjY4OC0zNC42MjRIMTg4LjQ4YTM0Ljc1MiAzNC43NTIgMCAwIDAtMzQuNzUyIDM0LjY4OHogbTAtMTYxLjc5MmMwIDE5LjEzNiAxNS42MTYgMzQuNzUyIDM0LjY4OCAzNC43NTJoMTcwLjExMmEzNC44MTYgMzQuODE2IDAgMCAwIDM0LjY4OC0zNC43NTIgMzQuODE2IDM0LjgxNiAwIDAgMC0zNC42ODgtMzQuNjg4SDE4OC40OGEzNC44MTYgMzQuODE2IDAgMCAwLTM0Ljc1MiAzNC42ODh6IG0wLTE2MS42NjRjMCAxOS4wNzIgMTUuNjE2IDM0LjY4OCAzNC42ODggMzQuNjg4aDE3MC4xMTJhMzQuODE2IDM0LjgxNiAwIDAgMCAzNC42ODgtMzQuNjg4IDM0LjgxNiAzNC44MTYgMCAwIDAtMzQuNjg4LTM0LjY4OEgxODguNDhhMzQuNzUyIDM0Ljc1MiAwIDAgMC0zNC43NTIgMzQuNjg4eiBtMzkzLjI4LTE0OS4xMnY2NjguODY0Yzc0LjYyNC00MC41MTIgMTUwLjY1Ni01OC4wNDggMjM4LjQ2NC0yNS4wODggMTMuNTY4IDUuMDU2IDI2Ljc1MiAxMS4wMDggNDAgMTYuODk2IDQ2LjcyIDIwLjkyOCA4MS43OTIgMzUuMzI4IDEyOS4zNDQgMzUuODRsMC4xOTItNjgwLjMyYy01OS4xMzYtMS44NTYtOTEuMTM2LTEwLjc1Mi0xNTQuMTEyLTM5LjM2LTE2LjA2NC03LjIzMi0zMi4zMi0xNC42NTYtNDguODk2LTIwLjYwOC03NS42NDgtMjcuMTM2LTEzNy43MjggMi4zMDQtMjAzLjEzNiA0Mi42ODhsLTEuODU2IDEuMDg4ek00NzcuNTA0IDg3Mi4xOTJWMjAzLjMyOGwtMS43OTItMS4xNTJjLTY1LjQwOC00MC40NDgtMTI3LjU1Mi02OS44ODgtMjAzLjI2NC00Mi42ODgtMTYuNTEyIDUuOTUyLTMyLjcwNCAxMy4zNzYtNDguNzA0IDIwLjYwOC02My4wNCAyOC42MDgtOTUuMDQgMzcuNTA0LTE1NC4yNCAzOS4zNmwwLjE5MiA2ODAuMzJjNDcuNDg4LTAuNTEyIDgyLjYyNC0xNC44NDggMTI5LjM0NC0zNS44NCAxMy4yNDgtNS44ODggMjYuNDMyLTExLjg0IDQwLTE2Ljg5NiA4Ny43NDQtMzIuODk2IDE2My43NzYtMTUuMzYgMjM4LjQ2NCAyNS4xNTJ6IG0xNTMuNzI4LTUxOS43NDRjMCAxOS4wNzIgMTUuNTUyIDM0LjY4OCAzNC42ODggMzQuNjg4aDE3MC4wNDhhMzQuODE2IDM0LjgxNiAwIDAgMCAzNC43NTItMzQuNjg4IDM0Ljc1MiAzNC43NTIgMCAwIDAtMzQuNzUyLTM0LjY4OGgtMTcwLjA0OGEzNC42ODggMzQuNjg4IDAgMCAwLTM0LjY4OCAzNC42ODh6IG0wIDE2MS42NjRjMCAxOS4xMzYgMTUuNTUyIDM0Ljc1MiAzNC42ODggMzQuNzUyaDE3MC4wNDhhMzQuODE2IDM0LjgxNiAwIDAgMCAzNC43NTItMzQuNzUyIDM0LjgxNiAzNC44MTYgMCAwIDAtMzQuNzUyLTM0LjY4OGgtMTcwLjA0OGEzNC43NTIgMzQuNzUyIDAgMCAwLTM0LjY4OCAzNC42ODh6IG0wIDE2MS43OTJjMCAxOS4xMzYgMTUuNTUyIDM0Ljc1MiAzNC42ODggMzQuNzUyaDE3MC4wNDhhMzQuODE2IDM0LjgxNiAwIDAgMCAzNC43NTItMzQuNzUydi0wLjA2NGEzNC43NTIgMzQuNzUyIDAgMCAwLTM0Ljc1Mi0zNC42MjRoLTE3MC4wNDhhMzQuNjg4IDM0LjY4OCAwIDAgMC0zNC42ODggMzQuNjg4eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTY2MTEiPjwvcGF0aD48L3N2Zz4=';
const menuList: any = [
  {
    title: '表格', path: 'table', icon: icon,
    children: [
      {
        title: '基本表格', path: 'basic_table', icon: icon,
        children: [
          {
            path: 'table_detail', title: '表格详情'
          }
        ]
      }
    ]
  },
  {
    path: 'chart', title: '图表', icon: icon
  },
  {
    path: 'form', title: '表单', icon: icon
  },
  {
    path: 'tab', title: '标签页', icon: icon
  },
  {
    path: 'animation', title: '动画', icon: icon
  },
  {
    path: 'document', title: '文档', icon: icon
  }
];

export default {menuList}
