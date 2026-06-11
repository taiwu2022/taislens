// JavaScript 单行注释用两个斜杠开头；/* */ 也能写多行注释

// ===== 自动填入当前年份 =====
// document.querySelector 用 CSS 选择器找元素，"#year" 表示 id 为 year 的元素
const year = document.querySelector("#year");

// 如果找到了这个元素（防止它不存在时报错）
if (year) {
  // new Date().getFullYear() 取当前年份，textContent 设置元素里的文字
  year.textContent = new Date().getFullYear();
}

// ===== 照片数据 =====
// 这是一个数组，里面每一项是一张照片的信息（对象，用 {} 表示）
// 以后换成你自己的照片，只要改这里就行
const photos = [
  {
    title: "Tai, Now", // 照片标题
    meta: "Portrait",   // 分类/说明
    src: "./assets/photos/web/tai-main-page.jpg", // 图片地址
    alt: "Portrait of Tai.", // 图片替代文字（无障碍/加载失败时用）
    layout: "tall", // 布局类名：span-wide=横跨两列，tall=纵跨两行，空=普通
  },
  {
    title: "London Night",
    meta: "Cityscape",
    src: "./assets/photos/web/london-night.jpg",
    alt: "London skyline at night.",
    layout: "span-wide",
  },
  {
    title: "New York Night",
    meta: "Cityscape",
    src: "./assets/photos/web/new-york-night.jpg",
    alt: "New York city at night.",
    layout: "span-wide",
  },
  {
    title: "Tourist Landscape",
    meta: "Landscape",
    src: "./assets/photos/web/tourist-landscape.jpg",
    alt: "Tourist looking across a landscape.",
    layout: "span-wide",
  },
  {
    title: "New York Bridge",
    meta: "Architecture",
    src: "./assets/photos/web/new-york-bridge.jpg",
    alt: "Bridge structure in New York.",
    layout: "tall",
  },
  {
    title: "Graduation Portrait",
    meta: "Portrait",
    src: "./assets/photos/web/tai-master-graduation-photo.jpg",
    alt: "Tai in graduation dress.",
    layout: "",
  },
  {
    title: "Landscape Portrait",
    meta: "People",
    src: "./assets/photos/web/auntie-landscape-portrait.jpg",
    alt: "Portrait in a landscape setting.",
    layout: "",
  },
];

// ===== 找到页面上需要操作的元素 =====
const photoGrid = document.querySelector("#photo-grid"); // 照片网格容器
const lightbox = document.querySelector("#lightbox");    // 灯箱弹窗
// ?. 是"可选链"：如果 lightbox 不存在就返回 undefined，而不会报错
const lightboxImage = lightbox?.querySelector("img");          // 灯箱里的大图
const lightboxCaption = lightbox?.querySelector("p");          // 灯箱里的说明文字
const lightboxClose = lightbox?.querySelector(".lightbox-close"); // 灯箱关闭按钮

// ===== 把照片数据渲染成网页元素 =====
if (photoGrid) {
  // forEach 遍历每一张照片，photo 是当前这一张
  photos.forEach((photo) => {
    // 创建一个 button 作为照片卡片
    const card = document.createElement("button");
    // 设置类名：基础的 photo-card 加上这张照片的布局类（trim 去掉多余空格）
    card.className = `photo-card ${photo.layout}`.trim();
    card.type = "button";

    // 创建图片元素并填入地址和替代文字
    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.alt;

    // 创建说明文字（标题）
    const caption = document.createElement("span");
    caption.className = "photo-caption";
    caption.textContent = photo.title;

    // 创建第二行的小字（分类信息），放进 caption 里
    const meta = document.createElement("small");
    meta.textContent = photo.meta;
    caption.append(meta);

    // 把图片和说明都放进卡片
    card.append(image, caption);

    // 给卡片绑定点击事件：点了就打开灯箱
    card.addEventListener("click", () => {
      // 任一灯箱元素缺失就直接返回，避免报错
      if (!lightbox || !lightboxImage || !lightboxCaption) return;
      // 把当前照片的信息填进灯箱
      lightboxImage.src = photo.src;
      lightboxImage.alt = photo.alt;
      lightboxCaption.textContent = `${photo.title} — ${photo.meta}`;
      // showModal() 以弹窗形式打开灯箱（带背后遮罩）
      lightbox.showModal();
    });

    // 把做好的卡片加到网格里
    photoGrid.append(card);
  });
}

// ===== 关闭灯箱的两种方式 =====

// 1) 点击右上角的关闭按钮
lightboxClose?.addEventListener("click", () => {
  lightbox?.close();
});

// 2) 点击灯箱外的遮罩区域（点到照片本身不会关）
lightbox?.addEventListener("click", (event) => {
  // event.target 是实际被点到的元素；等于 lightbox 本身说明点的是边缘遮罩
  if (event.target === lightbox) {
    lightbox.close();
  }
});
