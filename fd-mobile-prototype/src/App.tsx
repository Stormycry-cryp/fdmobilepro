import { useMemo, useRef, useState } from "react";

type IconName =
  | "arrowDown"
  | "arrowLeft"
  | "arrowUpRight"
  | "check"
  | "chevronRight"
  | "circleUser"
  | "coins"
  | "copy"
  | "download"
  | "eraser"
  | "fileImage"
  | "folderOpen"
  | "gallery"
  | "heart"
  | "home"
  | "imagePlus"
  | "layers"
  | "library"
  | "listFilter"
  | "loader"
  | "more"
  | "play"
  | "plus"
  | "refresh"
  | "search"
  | "send"
  | "settings"
  | "sparkles"
  | "trash"
  | "upload"
  | "wand";

function Icon({ name, size = 18, className = "", fill }: { name: IconName; size?: number; className?: string; fill?: string }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill ?? "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  const icons: Record<IconName, React.ReactNode> = {
    arrowDown: <><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>,
    arrowLeft: <><path d="m15 18-6-6 6-6" /><path d="M20 12H9" /></>,
    arrowUpRight: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
    check: <path d="m5 12 5 5L20 7" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    circleUser: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    coins: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><rect x="4" y="4" width="11" height="11" rx="2" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    eraser: <><path d="m7 21-4-4L14 6l4 4L7 21Z" /><path d="M12 21h8" /></>,
    fileImage: <><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="9" cy="10" r="2" /><path d="m20 17-4-4-5 5" /></>,
    folderOpen: <><path d="M3 7h7l2 2h9v3" /><path d="M3 7v12h16l2-7H7l-2 7" /></>,
    gallery: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 5v14" /><path d="M17 5v14" /></>,
    heart: <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 8.8 2.6Z" />,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /></>,
    imagePlus: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M8 11h6" /><path d="M11 8v6" /><path d="m15 15 2-2 4 4" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    library: <><path d="M4 19V5" /><path d="M8 19V5" /><path d="M12 19V5" /><path d="M16 19V5" /><path d="M20 19V5" /></>,
    listFilter: <><path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" /></>,
    loader: <><path d="M12 2v4" /><path d="M12 18v4" /><path d="m4.9 4.9 2.8 2.8" /><path d="m16.3 16.3 2.8 2.8" /><path d="M2 12h4" /><path d="M18 12h4" /></>,
    more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    refresh: <><path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 4v6h-6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></>,
    settings: <><path d="M4 7h16" /><path d="M7 7v10" /><path d="M17 7v10" /><path d="M4 17h16" /></>,
    sparkles: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
    trash: <><path d="M4 7h16" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M6 7l1 14h10l1-14" /><path d="M9 7V4h6v3" /></>,
    upload: <><path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M5 20h14" /></>,
    wand: <><path d="M15 4 4 15l5 5L20 9l-5-5Z" /><path d="m14 5 5 5" /><path d="M4 4v4" /><path d="M2 6h4" /></>,
  };

  return <svg {...common}>{icons[name]}</svg>;
}

type Page =
  | "login"
  | "intro"
  | "guide"
  | "home"
  | "loft"
  | "design"
  | "mine"
  | "works"
  | "imageDetail"
  | "videoDetail"
  | "billing";

type Drawer = "upload" | "gallery" | "model" | "config" | "workActions" | null;
type MediaType = "image" | "video";

interface WorkItem {
  id: string;
  title: string;
  media: MediaType;
  prompt: string;
  time: string;
  favorite?: boolean;
  tone: string;
}

interface ResultTask {
  id: string;
  title: string;
  media: MediaType;
  prompt: string;
  model: string;
  ratio: string;
  resolution: string;
  batch: string;
  duration?: string;
  status: "success" | "running" | "failed";
  hasReference?: boolean;
}

interface BillingRecord {
  id: string;
  taskId: string;
  title: string;
  body: string;
  status: "成功" | "失败";
  media: MediaType;
}

interface GenerationConfig {
  createType: string;
  batch: string;
  resolution: string;
  ratio: string;
  duration: string;
}

function defaultConfigFor(type: MediaType): GenerationConfig {
  return type === "video"
    ? { createType: "视频", batch: "1 条", resolution: "1080p", ratio: "9:16", duration: "5s" }
    : { createType: "图片", batch: "2 张", resolution: "2K", ratio: "Auto", duration: "5s" };
}

const templateCategories = ["热门", "视频", "商拍精修", "款式修改", "图案设计", "线稿设计", "商品详情"];

const works: WorkItem[] = [
  {
    id: "w1",
    title: "白底细节精修",
    media: "image",
    prompt: "白底棚拍，保留面料细节",
    time: "今天 14:21",
    tone: "blue",
  },
  {
    id: "w2",
    title: "服装走秀短视频",
    media: "video",
    prompt: "模特自然走秀，镜头稳定",
    time: "已收藏",
    favorite: true,
    tone: "purple",
  },
  {
    id: "w3",
    title: "袖型改造",
    media: "image",
    prompt: "泡泡袖改为落肩袖",
    time: "昨天 18:40",
    tone: "green",
  },
  {
    id: "w4",
    title: "印花方案",
    media: "image",
    prompt: "春夏植物印花方案",
    time: "今天 13:02",
    tone: "amber",
  },
];

const initialTasks: ResultTask[] = [
  {
    id: "r1",
    title: "生成雪山图片",
    media: "image",
    prompt: "生成一组雪山背景下的轻户外羽绒服主视觉",
    model: "FD+3.0 图片",
    ratio: "3:4",
    resolution: "2K",
    batch: "4 张",
    status: "success",
  },
  {
    id: "r2",
    title: "加个人",
    media: "image",
    prompt: "加入自然站姿模特，服装质感保持一致",
    model: "FD+2.0 图片",
    ratio: "3:4",
    resolution: "2K",
    batch: "4 张",
    status: "running",
    hasReference: true,
  },
  {
    id: "r3",
    title: "走秀视频",
    media: "video",
    prompt: "让模特穿着生成服装自然走秀，9:16 竖屏",
    model: "Seedance 2.0",
    ratio: "9:16",
    resolution: "1080p",
    batch: "1 条",
    duration: "5s",
    status: "success",
    hasReference: true,
  },
  {
    id: "r4",
    title: "失败任务",
    media: "image",
    prompt: "生成白底主图时保持蕾丝细节和袖口层次",
    model: "FD+3.0 图片",
    ratio: "3:4",
    resolution: "2K",
    batch: "2 张",
    status: "failed",
    hasReference: true,
  },
  {
    id: "r5",
    title: "商品详情图",
    media: "image",
    prompt: "生成领口、袖口和面料局部细节图",
    model: "FD+3.0 图片",
    ratio: "4:3",
    resolution: "4K",
    batch: "2 张",
    status: "success",
  },
  {
    id: "r6",
    title: "香氛短视频",
    media: "video",
    prompt: "冷佩感香氛水带货短视频，手持展示，柔和车内光",
    model: "Seedance 2.0",
    ratio: "9:16",
    resolution: "1080p",
    batch: "1 条",
    duration: "5s",
    status: "success",
  },
  {
    id: "r7",
    title: "线稿成衣",
    media: "image",
    prompt: "根据线稿生成成衣效果，补充真实面料和自然阴影",
    model: "FD+2.0 图片",
    ratio: "1:1",
    resolution: "2K",
    batch: "2 张",
    status: "success",
  },
];

const billingRecords: BillingRecord[] = [
  { id: "b1", taskId: "r1", title: "图片生成", body: "任务成功 · FD+3.0 · -2 点", status: "成功", media: "image" },
  { id: "b2", taskId: "r3", title: "视频生成", body: "任务成功 · Seedance 2.0 · -12 点", status: "成功", media: "video" },
  { id: "b3", taskId: "r4", title: "失败任务", body: "任务失败 · 未扣点 · 已退回", status: "失败", media: "image" },
  { id: "b4", taskId: "r5", title: "商品详情图", body: "任务成功 · FD+3.0 · -4 点", status: "成功", media: "image" },
  { id: "b5", taskId: "r6", title: "香氛短视频", body: "任务成功 · Seedance 2.0 · -12 点", status: "成功", media: "video" },
  { id: "b6", taskId: "r7", title: "线稿成衣", body: "任务成功 · FD+2.0 · -2 点", status: "成功", media: "image" },
  { id: "b7", taskId: "r2", title: "图片生成中", body: "任务处理中 · FD+2.0 · 暂未扣点", status: "成功", media: "image" },
  { id: "b8", taskId: "r4", title: "参考图异常", body: "任务失败 · 未扣点 · 素材需重传", status: "失败", media: "image" },
];

function App() {
  const [page, setPage] = useState<Page>("login");
  const [pageHistory, setPageHistory] = useState<Page[]>([]);
  const [drawer, setDrawer] = useState<Drawer>(null);
  const [prompt, setPrompt] = useState("");
  const [activeCategory, setActiveCategory] = useState("热门");
  const [mediaFilter, setMediaFilter] = useState<"全部" | "图片" | "视频">("全部");
  const [workFilter, setWorkFilter] = useState("全部");
  const [billingFilter, setBillingFilter] = useState("全部");
  const [focusTaskId, setFocusTaskId] = useState<string | null>(null);
  const [continuous, setContinuous] = useState(false);
  const [modelType, setModelType] = useState<MediaType>("image");
  const [model, setModel] = useState("FD+3.0 图片");
  const [config, setConfig] = useState<GenerationConfig>(defaultConfigFor("image"));
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [tasks, setTasks] = useState<ResultTask[]>(initialTasks);
  const [selectedWork, setSelectedWork] = useState<WorkItem>(works[0]);
  const [selectedTask, setSelectedTask] = useState<ResultTask>(initialTasks[0]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toast, setToast] = useState("");

  const visibleTasks = useMemo(() => {
    if (mediaFilter === "图片") return tasks.filter(item => item.media === "image");
    if (mediaFilter === "视频") return tasks.filter(item => item.media === "video");
    return tasks;
  }, [mediaFilter, tasks]);

  const visibleWorks = useMemo(() => {
    if (workFilter === "收藏") return works.filter(item => item.favorite);
    if (workFilter === "图片") return works.filter(item => item.media === "image");
    if (workFilter === "视频") return works.filter(item => item.media === "video");
    return works;
  }, [workFilter]);

  const go = (next: Page) => {
    if (next !== page) setPageHistory(current => [...current.slice(-8), page]);
    setDrawer(null);
    setPage(next);
  };

  const goBack = () => {
    setDrawer(null);
    setPageHistory(current => {
      const next = [...current];
      setPage(next.pop() ?? "home");
      return next;
    });
  };

  const changeModelType = (type: MediaType) => {
    setModelType(type);
    setModel(type === "video" ? "Seedance 2.0" : "FD+3.0 图片");
    setConfig(defaultConfigFor(type));
  };

  const startGeneration = () => {
    const media = modelType;
    const id = `r${Date.now()}`;
    const nextTask: ResultTask = {
      id,
      title: prompt.trim() ? prompt.trim().slice(0, 16) : media === "video" ? "生成视频任务" : "生成图片任务",
      media,
      prompt: prompt.trim() || "根据当前参考图生成服装视觉",
      model,
      ratio: config.ratio,
      resolution: config.resolution,
      batch: config.batch,
      duration: media === "video" ? config.duration : undefined,
      status: "running",
      hasReference: selectedAssets.length > 0,
    };
    setDrawer(null);
    setTasks(current => [nextTask, ...current]);
    setSelectedTask(nextTask);
    if (page !== "design") setPageHistory(current => [...current.slice(-8), page]);
    setPage("design");
    setToast("生成任务已进入设计页");
    window.setTimeout(() => {
      setTasks(current => current.map(task => task.id === id ? { ...task, status: "success" } : task));
      setSelectedTask(current => current.id === id ? { ...current, status: "success" } : current);
    }, 1800);
  };

  const openDetailFromTask = (task: ResultTask) => {
    setSelectedTask(task);
    setToast("");
    go(task.media === "video" ? "videoDetail" : "imageDetail");
  };

  const openDetailFromWork = (work: WorkItem) => {
    setSelectedWork(work);
    setSelectedTask({
      id: work.id,
      title: work.title,
      media: work.media,
      prompt: work.prompt,
      model: work.media === "video" ? "Seedance 2.0" : "FD+3.0 图片",
      ratio: work.media === "video" ? "9:16" : "3:4",
      resolution: work.media === "video" ? "1080p" : "2K",
      batch: work.media === "video" ? "1 条" : "2 张",
      duration: work.media === "video" ? "5s" : undefined,
      status: "success",
      hasReference: true,
    });
    setToast("");
    go(work.media === "video" ? "videoDetail" : "imageDetail");
  };

  const openRecordTask = (taskId: string) => {
    const task = tasks.find(item => item.id === taskId) ?? initialTasks.find(item => item.id === taskId);
    if (task) {
      setMediaFilter(task.media === "video" ? "视频" : "图片");
      setSelectedTask(task);
    } else {
      setMediaFilter("全部");
    }
    setFocusTaskId(taskId);
    go("design");
  };

  const fillFromResult = () => {
    setPrompt(selectedTask.prompt);
    setModel(selectedTask.model);
    setModelType(selectedTask.media);
    setConfig(current => ({
      ...current,
      createType: selectedTask.media === "video" ? "视频" : "图片",
      ratio: selectedTask.ratio,
      resolution: selectedTask.resolution,
      batch: selectedTask.batch,
      duration: selectedTask.duration ?? current.duration,
    }));
    setToast("已回填参考图、提示词和配置");
    go("design");
  };

  const fillFromWork = (work: WorkItem) => {
    setPrompt(work.prompt);
    setSelectedAssets([work.id]);
    setModelType(work.media);
    setModel(work.media === "video" ? "Seedance 2.0" : "FD+3.0 图片");
    setConfig({
      ...defaultConfigFor(work.media),
      createType: work.media === "video" ? "视频" : "图片",
      ratio: work.media === "video" ? "9:16" : "3:4",
      resolution: work.media === "video" ? "1080p" : "2K",
      batch: work.media === "video" ? "1 条" : "2 张",
    });
    setToast(`已填入「${work.title}」的参考图和提示词`);
  };

  return (
    <main className="prototype-shell">
      <aside className="review-panel">
        <div>
          <p className="eyebrow">FD+ Mobile v1</p>
          <h1>对话生图移动端交互原型</h1>
          <p className="panel-copy">主路径：登录前触达 → 首页发起 → 设计页承接 → 详情复用 → 作品沉淀。</p>
        </div>
        <div className="panel-section">
          <p className="panel-title">评审入口</p>
          {[
            ["登录", "login"],
            ["首页", "home"],
            ["设计", "design"],
            ["作品", "works"],
            ["生成记录", "billing"],
          ].map(([label, target]) => (
            <button
              key={target}
              className={page === target ? "panel-link active" : "panel-link"}
              onClick={() => go(target as Page)}
            >
              {label}
              <Icon name="chevronRight" size={14} />
            </button>
          ))}
        </div>
        <div className="panel-section">
          <p className="panel-title">当前字段</p>
          <div className="state-card">
            <span>{model}</span>
            <span>{config.batch}</span>
            <span>{config.resolution}</span>
            <span>{config.ratio}</span>
            <span>{continuous ? "连续对话开" : "连续对话关"}</span>
          </div>
        </div>
      </aside>

      <PhoneFrame>
        <PointerTouchLayer page={page} openLoft={() => go("loft")} closeLoft={goBack}>
          <ScreenTransition page={page}>
            {page === "login" && <LoginPage go={go} />}
            {page === "intro" && <IntroPage goBack={goBack} />}
            {page === "guide" && <GuidePage go={go} />}
            {page === "home" && (
              <HomePage
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                prompt={prompt}
                setPrompt={setPrompt}
                openDrawer={setDrawer}
                startGeneration={startGeneration}
                works={works}
                fillFromWork={fillFromWork}
                go={go}
                continuous={continuous}
                setContinuous={setContinuous}
                referenceCount={selectedAssets.length}
              />
            )}
            {page === "loft" && (
              <LoftPage
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                prompt={prompt}
                setPrompt={setPrompt}
                openDrawer={setDrawer}
                startGeneration={startGeneration}
                continuous={continuous}
                setContinuous={setContinuous}
                referenceCount={selectedAssets.length}
                goBack={goBack}
              />
            )}
            {page === "design" && (
              <DesignPage
                filter={mediaFilter}
                setFilter={setMediaFilter}
                tasks={visibleTasks}
                openDetail={openDetailFromTask}
                openDrawer={setDrawer}
                prompt={prompt}
                setPrompt={setPrompt}
                startGeneration={startGeneration}
                continuous={continuous}
                setContinuous={setContinuous}
                fillPrompt={text => setPrompt(text)}
                go={go}
                goBack={goBack}
                focusTaskId={focusTaskId}
                clearFocusTask={() => setFocusTaskId(null)}
                referenceCount={selectedAssets.length}
              />
            )}
            {page === "mine" && <MinePage go={go} />}
            {page === "works" && (
              <WorksPage
                filter={workFilter}
                setFilter={setWorkFilter}
                works={visibleWorks}
                goBack={goBack}
                openDetail={openDetailFromWork}
                openActions={(work) => {
                  setSelectedWork(work);
                  setDrawer("workActions");
                }}
                setDeleteDialog={setDeleteDialog}
              />
            )}
            {page === "imageDetail" && (
              <DetailPage
                type="image"
                task={selectedTask}
                goBack={goBack}
                fillFromResult={fillFromResult}
                startGeneration={startGeneration}
              />
            )}
            {page === "videoDetail" && (
              <DetailPage
                type="video"
                task={selectedTask}
                goBack={goBack}
                fillFromResult={fillFromResult}
                startGeneration={startGeneration}
              />
            )}
            {page === "billing" && (
              <BillingPage
                goBack={goBack}
                filter={billingFilter}
                setFilter={setBillingFilter}
                records={billingRecords}
                openRecord={openRecordTask}
              />
            )}
          </ScreenTransition>
        </PointerTouchLayer>

        {["home", "loft", "mine", "works"].includes(page) && <BottomNav page={page === "loft" ? "home" : page} go={go} />}
        <DrawerHost
          drawer={drawer}
          openDrawer={setDrawer}
          close={() => setDrawer(null)}
          modelType={modelType}
          setModelType={changeModelType}
          model={model}
          setModel={setModel}
          config={config}
          setConfig={setConfig}
          selectedAssets={selectedAssets}
          setSelectedAssets={setSelectedAssets}
          selectedWork={selectedWork}
          openDetailFromWork={openDetailFromWork}
          setDeleteDialog={setDeleteDialog}
          go={go}
        />
        {deleteDialog && (
          <DeleteDialog
            onCancel={() => setDeleteDialog(false)}
            onConfirm={() => {
              setDeleteDialog(false);
              setDrawer(null);
              setToast("作品已删除");
            }}
          />
        )}
        {toast && <Toast message={toast} clear={() => setToast("")} />}
      </PhoneFrame>
    </main>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <section className="phone-wrap">
      <div className="phone">
        <div className="phone-notch">
          <span />
        </div>
        <div className="screen">{children}</div>
      </div>
    </section>
  );
}

function ScreenTransition({ page, children }: { page: Page; children: React.ReactNode }) {
  return (
    <div key={page} className="screen-page enter-page">
      {children}
    </div>
  );
}

function PointerTouchLayer({
  page,
  openLoft,
  closeLoft,
  children,
}: {
  page: Page;
  openLoft: () => void;
  closeLoft: () => void;
  children: React.ReactNode;
}) {
  const drag = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    lastY: number;
    dragging: boolean;
    scrollTarget: HTMLElement | null;
  } | null>(null);

  const getScrollableTarget = (target: EventTarget | null) => {
    let node = target instanceof HTMLElement ? target : null;
    while (node && !node.classList.contains("screen")) {
      const style = window.getComputedStyle(node);
      if (/(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight) return node;
      node = node.parentElement;
    }
    return null;
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || event.button !== 0) return;
    const target = event.target as HTMLElement;
    if (target.closest("input, textarea, select, a")) return;
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastY: event.clientY,
      dragging: false,
      scrollTarget: getScrollableTarget(event.target),
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const totalY = event.clientY - current.startY;
    const totalX = event.clientX - current.startX;
    if (!current.dragging && Math.hypot(totalX, totalY) < 8) return;
    if (!current.dragging) {
      current.dragging = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    const deltaY = event.clientY - current.lastY;
    if (current.scrollTarget && Math.abs(deltaY) > 0) current.scrollTarget.scrollTop -= deltaY;
    current.lastY = event.clientY;
    if (event.cancelable) event.preventDefault();
  };

  const onPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const totalY = event.clientY - current.startY;
    const totalX = event.clientX - current.startX;
    const wasDragging = current.dragging;
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (!wasDragging) return;
    if (Math.abs(totalY) < 72 || Math.abs(totalY) < Math.abs(totalX) * 1.2) return;
    if (page === "home" && totalY > 0) openLoft();
    if (page === "loft" && totalY < 0) closeLoft();
  };

  return (
    <div
      className="touch-surface"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
    >
      {children}
    </div>
  );
}

function StatusBar() {
  return (
    <div className="status-bar">
      <span>14:33</span>
      <span>5G&nbsp;&nbsp;97%</span>
    </div>
  );
}

function TopBar({
  title,
  back,
  right,
  subtitle,
}: {
  title: string;
  back?: () => void;
  right?: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <>
      <StatusBar />
      <header className="topbar">
        {back && (
          <button className="icon-button" onClick={back} aria-label="返回">
            <Icon name="arrowLeft" size={20} />
          </button>
        )}
        <div className="topbar-title-group">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="topbar-right">{right ?? <span />}</div>
      </header>
    </>
  );
}

function BottomNav({ page, go }: { page: Page; go: (page: Page) => void }) {
  const items = [
    { id: "home" as Page, label: "首页", icon: "home" as IconName },
    { id: "design" as Page, label: "设计", icon: "sparkles" as IconName },
    { id: "mine" as Page, label: "我的", icon: "circleUser" as IconName },
  ];
  return (
    <nav className="bottom-nav">
      {items.map(item => {
        const active = page === item.id || (item.id === "mine" && ["works", "billing"].includes(page));
        return (
          <button key={item.id} className={active ? "nav-item active" : "nav-item"} onClick={() => go(item.id)}>
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function Chip({
  label,
  active,
  onClick,
  compact,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  compact?: boolean;
}) {
  return (
    <button className={`${compact ? "chip compact" : "chip"} ${active ? "active" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
}

function Composer({
  value,
  onChange,
  openDrawer,
  onSend,
  placeholder = "输入一句话让我帮你设计",
  continuous,
  setContinuous,
  referenceCount = 0,
}: {
  value: string;
  onChange: (value: string) => void;
  openDrawer: (drawer: Drawer) => void;
  onSend: () => void;
  placeholder?: string;
  continuous: boolean;
  setContinuous: (value: boolean) => void;
  referenceCount?: number;
}) {
  return (
    <section className="composer">
      {referenceCount > 0 && (
        <div className="reference-pill">
          <Icon name="gallery" size={13} />
          已带入 {referenceCount} 张参考图
        </div>
      )}
      <textarea
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="提示词"
      />
      <div className="composer-actions">
        <div className="composer-left">
          <button className="round-tool primary" onClick={() => openDrawer("upload")} aria-label="上传图片">
            <Icon name="plus" size={20} />
          </button>
          <button className="round-tool" onClick={() => openDrawer("model")} aria-label="选择模型">
            <Icon name="layers" size={17} />
          </button>
          <button className="round-tool" onClick={() => openDrawer("config")} aria-label="配置项">
            <Icon name="settings" size={17} />
          </button>
        </div>
        <button
          className={continuous ? "context-switch active" : "context-switch"}
          onClick={() => setContinuous(!continuous)}
          aria-pressed={continuous}
        >
          <span>连续</span>
          <i />
        </button>
        <button className="optimize">优化</button>
        <button className="send-button" onClick={onSend} aria-label="发送">
          <Icon name="send" size={22} />
        </button>
      </div>
    </section>
  );
}

function LoginPage({ go }: { go: (page: Page) => void }) {
  return (
    <div className="page auth-page">
      <StatusBar />
      <section className="login-panel">
        <h1>登录 FD+</h1>
        <p>用手机号进入移动端对话生图体验</p>
        <label className="field phone-field">
          <span>+86</span>
          <input placeholder="请输入手机号" />
        </label>
        <label className="field code-field">
          <input placeholder="请输入验证码" />
          <button>获取验证码</button>
        </label>
        <button className="primary-button" onClick={() => go("guide")}>
          登录 / 注册
        </button>
        <label className="agreement">
          <input type="checkbox" defaultChecked />
          <span>我已阅读并同意用户协议和隐私政策</span>
        </label>
      </section>
      <button className="brand-lockup" onClick={() => go("intro")}>
        <strong>FashionDiffusion+</strong>
        <Icon name="arrowDown" size={18} />
      </button>
    </div>
  );
}

function IntroPage({ goBack }: { goBack: () => void }) {
  return (
    <div className="page intro-page" onClick={goBack}>
      <StatusBar />
      <button className="intro-dismiss-layer" onClick={goBack} aria-label="关闭介绍" />
      <section className="intro-sheet enter-sheet" onClick={event => event.stopPropagation()}>
        <div className="brand-title">
          <strong>FashionDiffusion+</strong>
          <Icon name="arrowDown" size={18} />
        </div>
        <div className="intro-video">
          <div className="skyline">{Array.from({ length: 9 }).map((_, index) => <span key={index} />)}</div>
          <button className="play-button">
            <Icon name="play" size={22} fill="currentColor" />
          </button>
        </div>
        <div className="intro-card">
          <h2>让服装设计更快进入可视化</h2>
          <p>FD+ 聚焦服装行业的图片与视频生成，从描述、参考图到作品复用，帮助团队更快完成创意验证。</p>
          <div className="stats">
            <span><strong>3000+</strong>品牌案例</span>
            <span><strong>2000+</strong>设计场景</span>
            <span><strong>400+</strong>行业客户</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function GuidePage({ go }: { go: (page: Page) => void }) {
  const steps = [
    ["选择作品", "从作品广场复用参考图和提示词"],
    ["描述或上传", "输入提示词，也可以继续加入参考图"],
    ["沉淀作品", "在设计页和作品页继续编辑复用"],
  ];
  return (
    <div className="page with-nav">
      <TopBar title="新手引导" subtitle="3 步完成第一次对话生图" />
      <section className="guide-hero">
        <div>
          <h2>从一句描述开始做服装视觉</h2>
          <p>图片、视频和作品复用都收束在同一个输入框。</p>
        </div>
        <MiniArtwork tone="purple" />
      </section>
      <div className="guide-list">
        {steps.map(([title, body], index) => (
          <button key={title} className="guide-step">
            <span>{index + 1}</span>
            <div>
              <strong>{title}</strong>
              <p>{body}</p>
            </div>
            <Icon name="chevronRight" size={18} />
          </button>
        ))}
      </div>
      <div className="guide-actions">
        <button className="primary-button" onClick={() => go("home")}>开始使用</button>
      </div>
    </div>
  );
}

function HomePage(props: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  openDrawer: (drawer: Drawer) => void;
  startGeneration: () => void;
  works: WorkItem[];
  fillFromWork: (work: WorkItem) => void;
  go: (page: Page) => void;
  continuous: boolean;
  setContinuous: (value: boolean) => void;
  referenceCount: number;
}) {
  return (
    <div className="page with-nav">
      <TopBar title="今天想做什么？" />
      <CategoryRail
        active={props.activeCategory}
        setActive={props.setActiveCategory}
        jumpOnSelect={(category) => {
          props.setActiveCategory(category);
          props.go("loft");
        }}
        onMore={() => props.go("loft")}
      />
      <div className="home-composer-wrap">
        <Composer
          value={props.prompt}
          onChange={props.setPrompt}
          openDrawer={props.openDrawer}
          onSend={props.startGeneration}
          continuous={props.continuous}
          setContinuous={props.setContinuous}
          referenceCount={props.referenceCount}
        />
      </div>
      <section className="section-block">
        <div className="section-head">
          <h3>作品广场</h3>
          <span>点击作品复用参考图和提示词</span>
        </div>
        <div className="masonry home-gallery">
          {props.works.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              tall={index % 3 === 0}
              onClick={() => props.fillFromWork(work)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function LoftPage(props: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  openDrawer: (drawer: Drawer) => void;
  startGeneration: () => void;
  continuous: boolean;
  setContinuous: (value: boolean) => void;
  referenceCount: number;
  goBack: () => void;
}) {
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const closeLoft = () => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(props.goBack, 260);
  };
  const heroItems = [
    { title: "冷感香调带货视频", tone: "purple", media: "video" as MediaType },
    { title: "海边泳装营销视频", tone: "blue", media: "video" as MediaType },
    { title: "商拍精修预览", tone: "amber", media: "image" as MediaType },
  ];
  return (
    <div
      className={closing ? "page with-nav loft-page closing" : "page with-nav loft-page"}
      onWheel={event => {
        if (event.deltaY < -36) closeLoft();
      }}
      onTouchStart={event => setTouchStartY(event.touches[0]?.clientY ?? null)}
      onTouchEnd={event => {
        const endY = event.changedTouches[0]?.clientY;
        if (touchStartY !== null && endY - touchStartY < -46) closeLoft();
        setTouchStartY(null);
      }}
    >
      <StatusBar />
      <div className="loft-hero-rail" aria-label="推荐场景预览">
        {heroItems.map((item, index) => (
          <button
            key={item.title}
            className={`loft-hero-card ${index === 1 ? "featured" : "side"}`}
            onClick={() => props.setActiveCategory(item.media === "video" ? "视频" : "商拍精修")}
          >
            <MiniArtwork tone={item.tone} play={item.media === "video"} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <CategoryRail active={props.activeCategory} setActive={props.setActiveCategory} onMore={() => props.setActiveCategory("商品详情")} />
      <div className="home-composer-wrap loft">
        <Composer
          value={props.prompt}
          onChange={props.setPrompt}
          openDrawer={props.openDrawer}
          onSend={props.startGeneration}
          continuous={props.continuous}
          setContinuous={props.setContinuous}
          referenceCount={props.referenceCount}
        />
      </div>
      <button className="loft-collapse" onClick={closeLoft} aria-label="回到首页首屏">
        <Icon name="arrowDown" size={18} />
      </button>
    </div>
  );
}

function CategoryRail({
  active,
  setActive,
  onMore,
  jumpOnSelect,
}: {
  active: string;
  setActive: (category: string) => void;
  onMore: () => void;
  jumpOnSelect?: (category: string) => void;
}) {
  return (
    <div className="category-rail">
      {templateCategories.slice(0, 5).map(category => (
        <button
          key={category}
          className={active === category ? "category active" : "category"}
          onClick={() => jumpOnSelect ? jumpOnSelect(category) : setActive(category)}
        >
          {category.replace("精修", "")}
        </button>
      ))}
      <button className="category" onClick={onMore}>更多</button>
    </div>
  );
}

function DesignPage(props: {
  filter: "全部" | "图片" | "视频";
  setFilter: (filter: "全部" | "图片" | "视频") => void;
  tasks: ResultTask[];
  openDetail: (task: ResultTask) => void;
  openDrawer: (drawer: Drawer) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  startGeneration: () => void;
  continuous: boolean;
  setContinuous: (value: boolean) => void;
  fillPrompt: (text: string) => void;
  go: (page: Page) => void;
  goBack: () => void;
  focusTaskId: string | null;
  clearFocusTask: () => void;
  referenceCount: number;
}) {
  return (
    <div className="page design-page">
      <TopBar
        title="设计"
        back={props.goBack}
        right={
          <div className="top-actions">
            <button className="icon-button" onClick={() => props.go("works")}><Icon name="folderOpen" size={17} /></button>
          </div>
        }
      />
      <div className="filter-row">
        {(["全部", "图片", "视频"] as const).map(item => (
          <Chip key={item} label={item} active={props.filter === item} onClick={() => props.setFilter(item)} />
        ))}
        <button className="new-session"><Icon name="plus" size={15} />新建会话</button>
      </div>
      <div className="result-feed">
        {props.tasks.map(task => (
          <TaskBlock
            key={task.id}
            task={task}
            focused={props.focusTaskId === task.id}
            onFocusEnd={props.clearFocusTask}
            openDetail={props.openDetail}
            fillPrompt={props.fillPrompt}
            startGeneration={props.startGeneration}
          />
        ))}
      </div>
      <div className="sticky-composer">
        <Composer
          value={props.prompt}
          onChange={props.setPrompt}
          openDrawer={props.openDrawer}
          onSend={props.startGeneration}
          placeholder="输入想继续设计的画面"
          continuous={props.continuous}
          setContinuous={props.setContinuous}
          referenceCount={props.referenceCount}
        />
      </div>
    </div>
  );
}

function TaskBlock({
  task,
  focused,
  onFocusEnd,
  openDetail,
  fillPrompt,
  startGeneration,
}: {
  task: ResultTask;
  focused?: boolean;
  onFocusEnd?: () => void;
  openDetail: (task: ResultTask) => void;
  fillPrompt: (text: string) => void;
  startGeneration: () => void;
}) {
  return (
    <article
      className={focused ? "task-block focused" : "task-block"}
      ref={(node) => {
        if (node && focused) {
          window.setTimeout(() => {
            node.scrollIntoView({ behavior: "smooth", block: "start" });
            window.setTimeout(() => onFocusEnd?.(), 1200);
          }, 80);
        }
      }}
    >
      <button className="task-title" onClick={() => fillPrompt(task.prompt)} title="轻点填入输入框">
        <h3>{task.title}</h3>
        <Icon name="copy" size={14} />
      </button>
      <div className="meta-row">
        {task.hasReference && <MiniRef />}
        <span>{task.model}</span>
        <span>{task.ratio}</span>
        <span>{task.resolution}</span>
        {task.duration && <span>{task.duration}</span>}
      </div>
      <div className={task.media === "video" ? "result-strip video-strip" : "result-strip"}>
        {task.media === "video" ? (
          <button className={`result-tile video ${task.status === "failed" ? "failed" : ""} ${task.status === "running" ? "running" : ""}`} onClick={() => openDetail(task)}>
            <MiniArtwork tone="purple" play />
            <span>{task.status === "failed" ? "生成失败" : task.status === "running" ? "生成中..." : "AI视频"}</span>
          </button>
        ) : (
          [0, 1, 2, 3].map(index => (
            <button key={index} className={`result-tile ${index === 1 && task.status === "running" ? "running" : ""} ${(task.status === "failed" || (index === 3 && task.status === "success")) ? "failed" : ""}`} onClick={() => openDetail(task)}>
              {index === 1 && task.status === "running" ? <Icon name="loader" className="spin" size={18} /> : <MiniArtwork tone={(task.status === "failed" || index === 3) ? "gray" : "blue"} />}
              <span>{task.status === "failed" ? "任务失败" : index === 3 && task.status === "success" ? "生成失败" : index === 1 && task.status === "running" ? "生成中..." : "AI生成"}</span>
            </button>
          ))
        )}
      </div>
      <div className="task-actions">
        <button onClick={() => fillPrompt(task.prompt)}><Icon name="eraser" size={15} />重新编辑</button>
        <button onClick={startGeneration}><Icon name="refresh" size={15} />再次生成</button>
        <button><Icon name="download" size={15} />全部下载</button>
      </div>
    </article>
  );
}

function MinePage({ go }: { go: (page: Page) => void }) {
  return (
    <div className="page with-nav">
      <TopBar title="我的" right={<button className="icon-button"><Icon name="more" size={19} /></button>} />
      <section className="account-card">
        <div>
          <strong>知衣账号</strong>
          <p>FD+ 移动端体验账号</p>
        </div>
        <span><Icon name="coins" size={16} /> 1,280 点</span>
      </section>
      <div className="menu-list">
        <MenuRow icon={<Icon name="gallery" size={20} />} title="我的作品" body="查看图片/视频结果，支持批量管理" onClick={() => go("works")} />
        <MenuRow icon={<Icon name="coins" size={20} />} title="生成记录" body="扣点统计、任务状态、失败记录" onClick={() => go("billing")} />
        <MenuRow icon={<Icon name="settings" size={20} />} title="设置" body="账号与权限" />
      </div>
      <button className="logout-button">退出登录</button>
    </div>
  );
}

function MenuRow({ icon, title, body, onClick }: { icon: React.ReactNode; title: string; body: string; onClick?: () => void }) {
  return (
    <button className="menu-row" onClick={onClick}>
      <span className="menu-icon">{icon}</span>
      <span>
        <strong>{title}</strong>
        <small>{body}</small>
      </span>
      <Icon name="chevronRight" size={18} />
    </button>
  );
}

function WorksPage(props: {
  filter: string;
  setFilter: (filter: string) => void;
  works: WorkItem[];
  goBack: () => void;
  openDetail: (work: WorkItem) => void;
  openActions: (work: WorkItem) => void;
  setDeleteDialog: (value: boolean) => void;
}) {
  const [batchMode, setBatchMode] = useState(false);
  return (
    <div className="page works-page with-nav">
      <TopBar title="我的作品" back={props.goBack} />
      <div className="search-bar">
        <Icon name="search" size={17} />
        <input placeholder="搜索提示词 / 会话 / 时间" />
        <button><Icon name="listFilter" size={16} /></button>
      </div>
      <div className="filter-row scrollable">
        {["全部", "收藏", "图片", "视频", "2K", "本周"].map(item => (
          <Chip key={item} label={item} active={props.filter === item} onClick={() => props.setFilter(item)} />
        ))}
      </div>
      {batchMode && (
        <div className="batch-action-row">
          <button onClick={() => props.setDeleteDialog(true)}><Icon name="trash" size={15} />删除</button>
          <button><Icon name="download" size={15} />下载</button>
        </div>
      )}
      <div className="masonry">
        {props.works.map((work, index) => (
          <WorkCard
            key={work.id}
            work={work}
            tall={index % 3 === 0}
            onClick={() => props.openDetail(work)}
            onMore={() => props.openActions(work)}
          />
        ))}
      </div>
      <button className={batchMode ? "batch-button active" : "batch-button"} onClick={() => setBatchMode(!batchMode)}>
        {batchMode ? "完成管理" : "批量管理"}
      </button>
    </div>
  );
}

function WorkCard({
  work,
  tall,
  onClick,
  onMore,
}: {
  work: WorkItem;
  tall?: boolean;
  onClick: () => void;
  onMore?: () => void;
}) {
  return (
    <article className={tall ? "work-card tall" : "work-card"}>
      <button className={`work-cover ${work.tone}`} onClick={onClick}>
        <span className="media-badge">{work.media === "video" ? "视频" : "图片"}</span>
        <MiniArtwork tone={work.tone} play={work.media === "video"} />
      </button>
      {onMore && (
        <button className="more-float" onClick={onMore} aria-label="作品操作">
          <Icon name="more" size={16} />
        </button>
      )}
      <strong>{work.title}</strong>
      <p>{work.time} · {work.media === "video" ? "视频" : "图片"}</p>
      {work.favorite && <Icon name="heart" className="fav" size={13} fill="currentColor" />}
    </article>
  );
}

function DetailPage({
  type,
  task,
  goBack,
  fillFromResult,
  startGeneration,
}: {
  type: MediaType;
  task: ResultTask;
  goBack: () => void;
  fillFromResult: () => void;
  startGeneration: () => void;
}) {
  const cost = type === "video" ? "12 点" : "2 点";
  const size = type === "video" ? `${task.resolution} · ${task.ratio} · ${task.duration ?? "5s"}` : `${task.resolution} · ${task.ratio} · ${task.batch}`;
  return (
    <div className="page detail-page">
      <TopBar title={type === "video" ? "视频详情" : "图片详情"} back={goBack} right={<button className="plain-icon"><Icon name="more" size={20} /></button>} />
      <button className={type === "video" ? "detail-preview video" : "detail-preview"}>
        <MiniArtwork tone={type === "video" ? "purple" : "blue"} play={type === "video"} />
        {type === "video" && <span className="duration">5s</span>}
      </button>
      <section className="detail-info">
        <div className="detail-meta-card">
          <DetailMetaRow label="任务类型" value={type === "video" ? "视频生成" : "图片生成"} />
          <DetailMetaRow label="模型" value={task.model} />
          <DetailMetaRow label="生成时间" value="2026-05-27 14:33" />
          <DetailMetaRow label="输出规格" value={size} />
          <DetailMetaRow label="扣点信息" value={`成功扣减 ${cost}`} />
        </div>
        <button className="detail-source-card" onClick={fillFromResult}>
          <div>
            <span>来源内容</span>
            <strong>{task.prompt}</strong>
            <small>{task.hasReference ? "含参考图，轻点回填到输入框继续设计" : "轻点回填提示词和参数继续设计"}</small>
          </div>
          <Icon name="chevronRight" size={18} />
        </button>
      </section>
      <div className="detail-actions">
        <button><Icon name="download" size={17} />下载</button>
        <button onClick={fillFromResult}><Icon name="wand" size={17} />继续设计</button>
        <button className="primary" onClick={startGeneration}><Icon name="refresh" size={17} />重新生成</button>
      </div>
    </div>
  );
}

function DetailMetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="detail-meta-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function BillingPage({
  goBack,
  filter,
  setFilter,
  records,
  openRecord,
}: {
  goBack: () => void;
  filter: string;
  setFilter: (filter: string) => void;
  records: BillingRecord[];
  openRecord: (taskId: string) => void;
}) {
  const visibleRecords = records.filter(record => {
    if (filter === "成功") return record.status === "成功";
    if (filter === "失败") return record.status === "失败";
    if (filter === "图片") return record.media === "image";
    if (filter === "视频") return record.media === "video";
    return true;
  });
  return (
    <div className="page billing-page">
      <TopBar title="生成记录" back={goBack} />
      <section className="balance-card">
        <p>当前可用点数</p>
        <strong>1,280</strong>
        <span>近 7 天扣点 38 点 · 近 30 天扣点 216 点</span>
      </section>
      <div className="filter-row scrollable">
        {["全部", "成功", "失败", "图片", "视频"].map(item => (
          <Chip key={item} label={item} active={filter === item} onClick={() => setFilter(item)} />
        ))}
      </div>
      <div className="billing-list">
        {visibleRecords.map(row => (
          <button
            key={row.id}
            className={`billing-row ${row.status === "失败" ? "failed" : ""}`}
            onClick={() => openRecord(row.taskId)}
          >
            <span>
              <strong>{row.title}</strong>
              <small>{row.body}</small>
            </span>
            <em>{row.status}</em>
            <Icon name="chevronRight" size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}

function DrawerHost(props: {
  drawer: Drawer;
  openDrawer: (drawer: Drawer) => void;
  close: () => void;
  modelType: MediaType;
  setModelType: (type: MediaType) => void;
  model: string;
  setModel: (model: string) => void;
  config: GenerationConfig;
  setConfig: (config: GenerationConfig) => void;
  selectedAssets: string[];
  setSelectedAssets: (assets: string[]) => void;
  selectedWork: WorkItem;
  openDetailFromWork: (work: WorkItem) => void;
  setDeleteDialog: (value: boolean) => void;
  go: (page: Page) => void;
}) {
  if (!props.drawer) return null;
  return (
    <div className="drawer-layer" onClick={props.close}>
      <section className={`drawer-sheet ${props.drawer === "gallery" ? "tall" : ""}`} onClick={event => event.stopPropagation()}>
        <button className="drawer-handle" onClick={props.close} aria-label="关闭" />
        {props.drawer === "upload" && (
          <UploadDrawer
            close={props.close}
            openGallery={() => props.openDrawer("gallery")}
            openLibrary={() => props.close()}
          />
        )}
        {props.drawer === "gallery" && <GalleryDrawer selected={props.selectedAssets} setSelected={props.setSelectedAssets} close={props.close} />}
        {props.drawer === "model" && (
          <ModelDrawer
            modelType={props.modelType}
            setModelType={props.setModelType}
            model={props.model}
            setModel={props.setModel}
            close={props.close}
          />
        )}
        {props.drawer === "config" && <ConfigDrawer modelType={props.modelType} config={props.config} setConfig={props.setConfig} close={props.close} />}
        {props.drawer === "workActions" && (
          <WorkActionsDrawer
            work={props.selectedWork}
            close={props.close}
            openDetail={props.openDetailFromWork}
            setDeleteDialog={props.setDeleteDialog}
          />
        )}
      </section>
    </div>
  );
}

function UploadDrawer({ close, openGallery, openLibrary }: { close: () => void; openGallery: () => void; openLibrary: () => void }) {
  return (
    <>
      <h3>上传参考图</h3>
      <p className="drawer-sub">选择来源后会回到当前输入状态</p>
      <button className="source-row" onClick={openGallery}>
        <span><Icon name="gallery" size={18} /></span>
        <div><strong>我的图库</strong><small>从历史作品和素材中选择</small></div>
        <Icon name="chevronRight" size={18} />
      </button>
      <button className="source-row" onClick={openLibrary}>
        <span><Icon name="upload" size={18} /></span>
        <div><strong>本地上传</strong><small>调用设备图片上传</small></div>
        <Icon name="chevronRight" size={18} />
      </button>
    </>
  );
}

function GalleryDrawer({ selected, setSelected, close }: { selected: string[]; setSelected: (assets: string[]) => void; close: () => void }) {
  return (
    <>
      <h3>我的图库</h3>
      <div className="filter-row scrollable in-sheet">
        {["全部", "图片", "视频", "最近"].map((item, index) => <Chip key={item} label={item} active={index === 0} />)}
      </div>
      <p className="drawer-sub">已选择 {selected.length} 个，支持多选</p>
      <div className="gallery-grid">
        {Array.from({ length: 9 }).map((_, index) => {
          const id = `g${index + 1}`;
          const active = selected.includes(id);
          return (
            <button
              key={id}
              className={active ? "gallery-cell active" : "gallery-cell"}
              onClick={() => setSelected(active ? selected.filter(item => item !== id) : [...selected, id])}
            >
              <MiniArtwork tone={index % 3 === 0 ? "blue" : index % 3 === 1 ? "purple" : "green"} play={index === 2} />
              {active && <span><Icon name="check" size={13} /></span>}
            </button>
          );
        })}
      </div>
      <button className="primary-button wide" onClick={close}>确认选择</button>
    </>
  );
}

function ModelDrawer(props: {
  modelType: MediaType;
  setModelType: (type: MediaType) => void;
  model: string;
  setModel: (model: string) => void;
  close: () => void;
}) {
  const options = props.modelType === "image"
    ? ["FD+3.0 图片", "FD+2.0 图片", "Seedream 5.0 Lite"]
    : ["Seedance 2.0", "Seedance 2.0 Fast", "Seedance 1.5 Pro"];
  return (
    <>
      <h3>选择模型</h3>
      <div className="segmented">
        <button className={props.modelType === "image" ? "active" : ""} onClick={() => props.setModelType("image")}>图片模型</button>
        <button className={props.modelType === "video" ? "active" : ""} onClick={() => props.setModelType("video")}>视频模型</button>
      </div>
      <div className="model-grid">
        {options.map(option => (
          <button key={option} className={props.model === option ? "model-card active" : "model-card"} onClick={() => props.setModel(option)}>
            <strong>{option}</strong>
            <small>{props.modelType === "image" ? "适合服装主图和款式修改" : "适合走秀和商品动态展示"}</small>
            {props.model === option && <Icon name="check" size={17} />}
          </button>
        ))}
      </div>
      <button className="primary-button wide" onClick={props.close}>使用模型</button>
    </>
  );
}

function ConfigDrawer({
  modelType,
  config,
  setConfig,
  close,
}: {
  modelType: MediaType;
  config: GenerationConfig;
  setConfig: (config: GenerationConfig) => void;
  close: () => void;
}) {
  const rows = modelType === "video"
    ? [
        ["生成条数", "batch", ["1 条"], "视频模型一次生成 1 条"],
        ["清晰度", "resolution", ["720p", "1080p"], "1080p 适合成片预览"],
        ["比例", "ratio", ["Auto", "9:16", "16:9", "1:1"], "Auto 会按参考图智能匹配"],
        ["视频时长", "duration", ["5s", "10s"], "短视频默认 5s"],
      ] as const
    : [
        ["生成批次", "batch", ["1 张", "2 张", "4 张"], "移动端单次生成保持轻量"],
        ["清晰度", "resolution", ["2K", "4K"], "2K 适合快速预览"],
        ["比例", "ratio", ["Auto", "1:1", "3:4", "4:3", "9:16", "16:9"], "Auto 会按参考图智能匹配"],
      ] as const;
  return (
    <>
      <h3>{modelType === "video" ? "视频配置项" : "图片配置项"}</h3>
      <div className="config-list">
        {rows.map(([label, key, values, helper]) => (
          <div key={key} className="config-row">
            <div className="config-row-head">
              <span>{label}</span>
              <small>{helper}</small>
            </div>
            <div className="config-option-list">
              {values.map(value => (
                <button
                  key={value}
                  className={config[key] === value ? "active" : ""}
                  onClick={() => setConfig({ ...config, [key]: value })}
                >
                  <span>{value}</span>
                  {value === "Auto" && <small>推荐</small>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="primary-button wide" onClick={close}>保存配置</button>
    </>
  );
}

function WorkActionsDrawer(props: {
  work: WorkItem;
  close: () => void;
  openDetail: (work: WorkItem) => void;
  setDeleteDialog: (value: boolean) => void;
}) {
  return (
    <>
      <h3>{props.work.title}</h3>
      <button className="action-row" onClick={() => props.openDetail(props.work)}><Icon name="fileImage" size={18} />放大查看</button>
      <button className="action-row"><Icon name="refresh" size={18} />重新生成</button>
      <button className="action-row"><Icon name="download" size={18} />下载</button>
      <button className="action-row danger" onClick={() => props.setDeleteDialog(true)}><Icon name="trash" size={18} />删除</button>
    </>
  );
}

function DeleteDialog({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="dialog-layer">
      <section className="confirm-dialog pop-in">
        <h3>确认删除作品？</h3>
        <p>删除后作品将从当前列表移除，不影响已下载到本地的文件。</p>
        <div>
          <button onClick={onCancel}>取消</button>
          <button className="danger" onClick={onConfirm}>确认删除</button>
        </div>
      </section>
    </div>
  );
}

function Toast({ message, clear }: { message: string; clear: () => void }) {
  window.setTimeout(clear, 1800);
  return <div className="toast">{message}</div>;
}

function MiniArtwork({ tone = "blue", play }: { tone?: string; play?: boolean }) {
  return (
    <div className={`mini-art ${tone}`}>
      <span className="shirt-body" />
      <span className="sleeve left" />
      <span className="sleeve right" />
      {play && <i><Icon name="play" size={15} fill="currentColor" /></i>}
    </div>
  );
}

function MiniRef() {
  return <span className="mini-ref"><Icon name="imagePlus" size={13} /></span>;
}

export default App;
