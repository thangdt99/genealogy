const FAMILY_DATA = [
  {
    "id": 1,
    "name": "Lê Thành Công",
    "gender": "Male",
    "dob": "1920",
    "phone": "0900000001"
  },
  {
    "id": 2,
    "parent": 1,
    "name": "Lê Hạnh Phúc",
    "gender": "Female",
    "dob": "1940",
    "phone": "0900000002"
  },
  {
    "id": 3,
    "parent": 1,
    "name": "Lê Văn Vinh",
    "gender": "Male",
    "dob": "1942",
    "phone": "0900000003"
  },
  {
    "id": 4,
    "parent": 3,
    "name": "Lê Văn Thắng",
    "gender": "Male",
    "dob": "1962",
    "phone": "0900000004"
  },
  {
    "id": 5,
    "parent": 3,
    "name": "Lê Thị Thảo",
    "gender": "Female",
    "dob": "1963",
    "phone": "0900000005"
  },
  {
    "id": 6,
    "parent": 2,
    "name": "Lê Công Minh",
    "gender": "Male",
    "dob": "1965",
    "phone": "0900000006"
  },
  {
    "id": 7,
    "parent": 6,
    "name": "Lê Thị Phương",
    "gender": "Female",
    "dob": "1984",
    "phone": "0900000007"
  },
  {
    "id": 8,
    "parent": 7,
    "name": "Lê Tiến Dũng",
    "gender": "Male",
    "dob": "2002",
    "phone": "0900000008"
  },
  {
    "id": 9,
    "parent": 7,
    "name": "Lê Văn Vinh",
    "gender": "Male",
    "dob": "2004",
    "phone": "0900000011"
  },
  {
    "id": 10,
    "parent": 7,
    "name": "Lê Thu Hiền",
    "gender": "Female",
    "dob": "2007",
    "phone": "0900000010"
  },
  {
    "id":11,
    "parent": 9,
    "name": "Lê Thu Hương",
    "gender": "Female",
    "dob": "2023",
    "phone": "0900000009"
  },
  {
    "id": 12,
    "parent": 9,
    "name": "Lê Thu Trang",
    "gender": "Female",
    "dob": "2025",
    "phone": "0900000012"
  },
  {
    "id": 13,
    "parent": 6,
    "name": "Lê Thanh Thảo",
    "gender": "Female",
    "dob": "2004",
    "phone": "0900000013"
  },
  {
    "id": 14,
    "parent": 8,
    "name": "Lê Hoài An",
    "gender": "Male",
    "dob": "2022",
    "phone": "0900000014"
  }
];
//"image": "images/female.png",

const viewport = document.querySelector('.tree-viewport');
let isDown = false, startX, startY, scrollLeft, scrollTop;

viewport.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX;
  startY = e.pageY;
  scrollLeft = viewport.scrollLeft;
  scrollTop = viewport.scrollTop;
});

viewport.addEventListener('mouseleave', () => isDown = false);
viewport.addEventListener('mouseup', () => isDown = false);

viewport.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  viewport.scrollLeft = scrollLeft - (e.pageX - startX);
  viewport.scrollTop = scrollTop - (e.pageY - startY);
});

function dobToTimestamp(dob) {
  if (!dob || typeof dob !== "string") return Infinity;

  const parts = dob.split("/").map(p => p.trim());

  let day = 1;
  let month = 1;
  let year;

  if (parts.length === 1) {
    // "1985"
    year = Number(parts[0]);
  } else if (parts.length === 2) {
    // "06/1985"
    month = Number(parts[0]);
    year = Number(parts[1]);
  } else if (parts.length === 3) {
    // "15/06/1985"
    day = Number(parts[0]);
    month = Number(parts[1]);
    year = Number(parts[2]);
  }

  if (!year || Number.isNaN(year)) return Infinity;

  return new Date(year, month - 1, day).getTime();
}

const nodeMap = {};
function buildTree(data) {
  const roots = [];

  data.forEach(item => {
    nodeMap[item.id] = { ...item, children: [] };
  });

  data.forEach(item => {
    if (item.parent) {
      nodeMap[item.parent]?.children.push(nodeMap[item.id]);
    } else {
      roots.push(nodeMap[item.id]);
    }
  });

  return roots;
}

function sortNodeByDob(node) {
  if (!node.children || node.children.length === 0) return node;

  node.children.sort((a, b) => {
    return dobToTimestamp(a.dob) - dobToTimestamp(b.dob);
  });

  node.children.forEach(sortNodeByDob);
  return node;
}

function sortTreeByDob(nodes) {
  nodes.sort((a, b) => dobToTimestamp(a.dob) - dobToTimestamp(b.dob));
  nodes.forEach(sortNodeByDob);
  return nodes;
}

function renderTree(nodes) {
  const ul = document.createElement('ul');

  nodes.forEach(node => {
    const li = document.createElement('li');

    const div = document.createElement('div');
    div.className = `person ${node.gender.toLowerCase()}`;

    div.innerHTML = `
      <img src="${node.image ? node.image : node.gender === 'Male' ? 'images/male.png' : 'images/female.png'}" alt="${node.name}">
      <div class="name">${node.name}</div>
      ${node.dob ? `<div class="year">Ngày sinh: ${node.dob}</div>` : ''}
      ${node.phone ? `<div class="phone">SĐT: ${node.phone}</div>` : ''}
    `;

    li.appendChild(div);

    if (node.children.length > 0) {
      li.appendChild(renderTree(node.children));
    }

    ul.appendChild(li);
  });

  return ul;
}

const treeData = buildTree(FAMILY_DATA);

function cloneSubTree(node) {
  return {
    ...node,
    children: node.children.map(cloneSubTree)
  };
}

function searchByName() {
  const keyword = document.getElementById('searchInput').value;
  if (!keyword) return;

  const matches = Object.values(nodeMap).filter(p => p.name.toLowerCase().trim() === keyword.toLowerCase().trim());
  const container = document.getElementById('tree');
  container.innerHTML = '';

  if (matches.length === 0) {
    container.innerHTML = '<p style="text-align:center">Không tìm thấy</p>';
    return;
  }

  matches.forEach(match => {
    const treeRoot = cloneSubTree(match);
    sortNodeByDob(treeRoot);

    const wrapper = document.createElement('div');
    wrapper.className = 'search-tree';

    wrapper.appendChild(renderTree(sortTreeByDob([treeRoot])));
    container.appendChild(wrapper);
  });
}

function resetTree() {
  const container = document.getElementById('tree');
  document.getElementById('searchInput').value = '';
  container.innerHTML = '';
  container.appendChild(renderTree(sortTreeByDob(treeData)));
}


const container = document.getElementById('tree');
container.classList.add('tree');
container.appendChild(renderTree(sortTreeByDob(treeData)));
