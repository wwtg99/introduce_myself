<template>
  <div class="resume">
    <h1>火眼狻猊</h1>
    <h2>Bio</h2>
    <div class="bio" id="bio">
      <p v-for="(p, i) in bio" :key="i" v-html="p"></p>
    </div>
    <h2>Projects</h2>
    <div class="projects" id="projects">
      <Timeline>
        <TimelineItem v-for="(t, i) in projects" :key="i">
          <p class="title">{{ t['title'] }} <span v-if="t['tags']" class="tags"><Tag v-for="(tg, k) in t['tags']" :key="k">{{ tg }}</Tag></span></p>
          <p class="time">{{ t['time'] }}</p>
          <div class="content">
            <p v-for="(p, j) in t['descr']" :key="j">{{ p }}</p>
            <Button icon="android-desktop" v-if="t['web']" @click="openUrl(t['web'])">WEBSITE</Button>
            <Button icon="social-github" v-if="t['github']" @click="openUrl(t['github'])">GITHUB</Button>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'resume',
    data () {
      return {
        bio: [
          '本人现供职于基因检测公司任生物信息部助理总监，主要的工作是信息技术和自动化技术在医疗健康等领域的应用，包括实验室信息管理系统的开发，各个系统、仪器、自动化工作站的对接，自动化流程，智能报告等等。在医疗健康技术飞速发展，人们日益关注自身健康的今天，医疗健康等传统领域还存在大量人工操作，出错率高，难以追踪。我致力于将信息技术和自动化技术的优势与之结合，提高工作效率，降低出错率，做到有迹可循，有据可查。我和我的团队正帮助我们公司内部、各部门间以及各个合作公司提高工作效率，规范工作流程，降低人力成本。同时，我也在探索机器学习和人工智能在这些领域的应用，希望这些技术能进一步帮助医疗健康领域的发展。',
          '本人热爱技术，受益于技术，但不受制于技术。我对于项目技术路线的选择总是从实际情况出发，选择适合于此项目的技术。应用以技术为基础，技术需要从应用的角度出发。本人已使用于实际项目的开发语言包括 Java、PHP、C#、Python、JavaScript、PL/PGSQL，熟悉阿里云、AWS 和自建 Linux 服务器的运维，掌握关系型数据库、MongoDB、Redis、Elasticsearch、网络爬虫、Docker 等技术的运用。',
          '本人硕士毕业于苏州大学，研究的方向是下一代测序相关的软件开发，开发了多款数据分析与工具软件，部分已发表。',
          '我的个人主页是 <a href="http://52jing.wang">52jing.wang</a>，GITHUB 主页是 <a href="https://github.com/wwtg99" target="_blank">github.com/wwtg99</a>。'
        ],
        projects: [
          {
            title: '微信服务号开发',
            time: '2017/11 -- 2017/12',
            descr: [
              '为了便于用户使用我们的检测服务，拉近用户距离以便于二次营销，我提出了微信服务号的开发项目。该项目主要是将之前开发的客户云服务系统 GenoCloud 完全整合到微信服务号中去，主要提供了账号绑定、条码绑定、查看检测状态、查看报告等功能。同时，之前的 PDF 报告不太适合于移动用户的阅读，我在之前 PDF 报告的基础上重新开发了网页版的报告，提供了 PDF 报告所不能提供的多级分类导航、快速搜索、相关链接等功能。系统使用 Laravel 作为后端框架，NodeJs 提供数据聚合接口，数据库使用了 Postgresql + Mongo 的组合，使用 Redis 作为缓存服务，前端采用 Vuejs + Vue-Router 开发。',
              '我负责管理整个项目，设计系统架构，协调商务人员、设计人员和开发人员的工作，领导并参与系统的开发与测试。'
            ],
            tags: ['PHP', 'Laravel', 'Vuejs', 'MongoDB', '微信服务号']
          },
          {
            title: '基因身高预测',
            time: '2017/09 -- 2017/10',
            descr: [
              '该项目使用了多种回归算法（线性回归、贝叶斯岭回归、Lasso 回归、SVR、Gradient Booting）分析了性别和多个 SNP 位点对身高的影响，进而构建了使用性别和 SNP 位点来进行身高预测的模型。',
              '我发起了这个项目，独立开发了分析系统，编写分析报告，并搭建了一个分析网站。'
            ],
            tags: ['Python', 'sklearn', '机器学习'],
            web: 'http://52jing.wang/height_predictor',
            github: 'https://github.com/wwtg99/predict_height'
          },
          {
            title: '图片滤镜工具',
            time: '2017/09 -- 2017/10',
            descr: [
              '该项目使用 Python 开发了一款图片滤镜软件，用于实现图片的手绘风格、浮雕风格、描边等多种滤镜效果。',
              '我独立开发了这个软件，并建立了一个示例网站。'
            ],
            tags: ['Python', 'Pillow', '图像处理'],
            web: 'http://52jing.wang/image',
            github: 'https://github.com/wwtg99/image_filter'
          },
          {
            title: '基因数据爬虫',
            time: '2017/08 -- 2017/10',
            descr: [
              '该项目基于 Scrapy 框架开发了易于配置和使用的基因数据爬虫，能从 dbSNP，Ensemble，Deafnessvdb，Gwas_Catelog，PharmGKB 等网站抓取相关数据并保存到本地数据库，方便执行本地化的分析与数据处理。同时，方便的扩展功能能快速支持其他网站。',
              '我独立设计开发了这个项目，并基于 Elasticsearch 建立了一个搜索引擎网站用于相关结果的快速搜索。'
            ],
            tags: ['Python', 'Scrapy', '网络爬虫', 'MongoDB', 'Elasticsearch'],
            web: 'http://52jing.wang/snp',
            github: 'https://github.com/wwtg99/snp_crawler'
          },
          {
            title: '销售管理系统 GenoSales',
            time: '2017/06 -- 2017/09',
            descr: [
              '该系统用于管理公司对外的销售订单，包括检测产品和试剂耗材。系统对接各个平台和各个服务商的数据，如中国平安，自动导入销售订单，同时也支持手动导入。系统提供基于角色的访问控制，并提供按年、季度、月、周、日的统计数据和统计图表。该项目基于 Laravel 开发后端接口，使用 Postgresql + Mongo 数据库，使用 VueJs 作为前端开发。',
              '我负责项目的管理，前期收集和整理需求，设计系统架构，数据库 ER 图，原型图等。然后拆分各个模块安排开发人员进行系统的开发，组织系统验收测试。'
            ],
            tags: ['PHP', 'Laravel', 'Vuejs', 'Postgresql']
          },
          {
            title: '实验室管理系统 GenoTrax2',
            time: '2016/12 -- 2017/06',
            descr: [
              '该项目是之前的项目 GenoTrax 的升级版，在总结了之前版本的反馈的基础上，以全新的架构开发的系统。项目基于 Laravel 框架，使用 Postgresql 作为数据库，使用了 Vuejs 作为前端框架。整个系统以简化实验人员的操作为目的，提供易于使用的操作界面。系统提供了标本管理，实验流程管理，质量控制，报告管理，统计分析等模块，所有模块以角色访问控制为基础，同时提供基于 OAuth 2.0 的 API 接口。',
              '我负责管理整个项目，前期收集需求，设计系统架构、数据库 ER 图、流程图、原型图等，然后拆分成各个模块，组织开发人员进行开发与测试，我自己也参与前后端的开发工作。最后，协调实验人员的验收测试与问题修复，推进系统的上线。'
            ],
            tags: ['LIMS', 'PHP', 'Laravel', 'Java', 'Vuejs', 'Python', 'Postgresql', 'Docker']
          },
          {
            title: '客户数据接口服务',
            time: '2016/09 -- 2017/03',
            descr: [
              '该项目主要是将公司内部系统的一些接口暴露给其他合作方使用，如激活检测套件、绑定条码、查看检测状态、查看检测报告、获取受检者信息、获取基因型和表型结果等。为了让合作方能方便安全的使用我们的接口，我参考主流的方法并设计了我们自己的授权签名算法。系统后端通过 JSON-RPC 和 JSON-API 的方式调用其他系统的接口，保持系统间的统一，对外提供 Restful API 接口，并自动生成接口文档。',
              '我负责整个项目的设计、架构与开发工作，设计对外提供的接口规范，领导并组织项目的开发与测试，与合作方交流，指导合作方使用我们的接口。'
            ],
            tags: ['PHP', 'Laravel', 'JSON-RPC', 'JSON-API']
          },
          {
            title: '客户云服务系统 GenoCloud',
            time: '2016/04 -- 2016/11',
            descr: [
              '此项目是针对检测客户开发的客户服务系统及相应的后台管理系统。客户可使用我们的云服务平台激活采集器、绑定条码、查询订单及查看最终的检测报告。公司的客服人员可使用后台管理系统查看、修改订单状态，跟进客户，寄送采集器，发送报告等。此项目的客户服务端采用了自动切换的电脑端和手机端页面，后端对接了公司其他系统的 API 服务，如订单管理系统、产品管理系统等。由于是需要大量访问的对外系统，我采用了 ELB 负载均衡接弹性群组，可在负载高时自动增加服务器，负载低时自动减少服务器。既提供高可用、快速的访问，又能节省服务器成本。',
              '我负责项目前期的需求收集、架构设计、ER 图绘制、原型图绘制和开发计划的编写。项目开发过程中，我带领开发团队分阶段、分模块逐步完成。部署上线后，我负责收集用户反馈，并组织开发团队迭代升级，保障系统的稳定运行。'
            ],
            tags: ['PHP', 'Laravel', 'Bootstrap', 'jQuery', 'Postgresql'],
            web: 'https://service.genowise.com'
          },
          {
            title: '产品和客户管理服务 ProductList',
            time: '2016/03 -- 2016/05',
            descr: [
              '该系统主要用于公司基因检测产品的管理和服务商的管理。由于公司基因检测产品非常之多，针对不同的服务商还提供不同的检测产品，以往的纸质文档管理方式太过于散乱，不便于追溯。因此，我提出了开发一个产品和服务商的管理系统，用于管理公司所有的基因检测产品和服务商。主要的功能是服务商的新增、编辑、查询和删除，检测产品的新增、编辑、查询和删除，并整合和规范了检测产品的创建流程。同时，提供了基于角色的访问控制，数据统计、导入导出等功能。此系统是基于 Laravel 框架和 Postgresql 数据库进行开发的，前端使用了 jQuery 和 Bootstrap 的组合。',
              '我从提出这个项目，负责整个项目的推进，到部署后的维护工作。在项目前期，我起草了检测产品编号规范，并参与了规范检测产品创建的流程。整个项目的开发工作是由我主导并主要参与的，后期的迭代升级由我跟进并分配给相关开发人员。'
            ],
            tags: ['PHP', 'Laravel', 'Bootstrap', 'jQuery', 'Postgresql']
          },
          {
            title: '基因结果服务 GenoResult',
            time: '2015/11 -- 2016/05',
            descr: [
              '此项目主要是用于存储、查询、统计基因检测的位点、基因型、表型和报告结果，属于公司内部服务项目。此项目后端基于 Laravel 框架和 Postgresql 数据库进行开发，前端使用了 jQuery 和 Bootstrap 的组合，使用和自行开发了一些 jQuery 插件。由于基因检测结果数据量非常大，需要系统具备高吞吐、高并发的能力，因此该项目采用了基于事件的异步处理方式。系统接受数据请求后生成相应事件交予后台并行处理并立即返回，使用户请求不阻塞。同时，前端也提供了基于角色的授权访问，针对不同用户授予不同的权限。用户可分别被授予位点的插入、修改、查询和删除操作，基因型和表型结果的插入和删除操作，报告的提交操作等。针对于大批量 PDF 报告的存储，此系统整合了 AWS 的 S3 对象存储服务，提供报告的快速查询与下载。此系统也提供了基于 OAuth 2.0 的一套 API 服务，供其他系统调用。',
              '我负责整个项目的设计、开发、测试和维护工作。在项目前期收集用户需求，设计系统架构，数据库 ER 图，绘制原型图等，编写软件开发计划书。领导通过计划书之后，我组织开发团队进行项目的开发，分拆项目模块，经过多次的迭代开发，交付用户进行验收测试。在项目部署上线后负责收集项目的反馈，管理迭代升级与系统维护。'
            ],
            tags: ['PHP', 'Laravel', 'Bootstrap', 'jQuery', 'Python']
          },
          {
            title: '公司官网',
            time: '2015/09 -- 2015/11',
            descr: [
              '此项目是公司的官网，主要用于展示公司的业务、产品，使客户更好地了解我们公司。为了更好地兼容 PC 端和手机端，我们设计开发了 PC 端和手机端两套系统，根据用户的访问设备自动切换。',
              '我负责整个项目的设计，包括网站原型的设计、素材的选择等，管理开发人员进行开发，协调市场部和开发人员，推进项目的上线。'
            ],
            tags: ['HTML', 'Javascript', 'CSS'],
            web: 'https://www.genowise.com'
          },
          {
            title: '标签打印软件 GenoCode',
            time: '2015/06 -- 2015/09',
            descr: [
              '由于商务部和临床检验部有较多的标签打印，而相关的工具使用比较复杂，因此我使用 Python 语言基于 wxPython 开发了 Windows 的桌面程序，用于简化标签打印。用户只需要输入相关的一些参数，即可批量打印出所需要的标签。',
              '我负责整个项目的设计、开发、测试与维护工作，此项目由我一人完成。前期进行项目的需求收集，软件功能的设计。开发过程中根据前期的设计和用户的反馈不断迭代和完善，我使用了 pyinstaller 将 Python 程序打包成了独立的 Windows 程序，便于用户的使用。同时，我还编写了软件的用户使用手册和开发文档。'
            ],
            tags: ['Python', 'wxPython']
          },
          {
            title: '实验室信息管理系统 GenoTrax',
            time: '2014/10 -- 2015/06',
            descr: [
              '实验室管理系统是整个实验室的信息管理核心。我们公司开发的实验室管理系统主要是针对基因检测的实验室，提供了一整套完善的实验流程和 SOP，主要包括标本管理、实验流程管理、质量控制、报告生成、角色控制等，同时能够整合其他的系统，如 HIS，客户自己的系统等。该系统能够帮助其他检测公司快速地开展相关的基因检测服务。',
              '我负责整个实验室管理系统的设计、开发、测试与维护工作，整个系统由我一人开发完成。项目前期使用 UML 等工具设计系统流程，数据库 ER 图，使用 Axure 工具设计软件原型。使用了 PHP + Postgresql 搭建后台，jQuery + Bootstrap 搭建用户页面。后台采用了 Celery 作为高性能的任务处理框架，，项目构建在我自己开发的一套 Web 框架之上。由于整个系统对数据的保护要求很高，我使用了 Postgresql 的许多服务器开发特性，如使用 PL/PGSQL 开发存储过程、触发器等，使用数据库规则限制数据的访问和删除，自己编写 SQL 以优化查询效率。同时我提供了多种项目部署的方式，如 Shell 脚本结合 Git 仓库，Docker 镜像和文件包等。我还负责项目的后期维护，系统出售给客户后的技术支持等。'
            ],
            tags: ['LIMS', 'PHP', 'Bootstrap', 'jQuery', 'Postgresql', 'Docker']
          },
          {
            title: '网络异常智能识别系统',
            time: '2014/10 -- 2015/06',
            descr: [
              '该项目是基于 Storm 平台的网络异常智能分析平台，支持用户自定义的规则发现并识别网络中的异常现象，并提供网络信息的统计分析。',
              '我负责基于 Storm 平台相关机器学习的大数据分析算法的开发，利用机器学习算法快速发现并识别网络中的异常数据，阻止入侵、病毒等非法的网络连接，识别网络中被病毒感染的机器等。'
            ],
            tags: ['Java', 'Storm', '机器学习']
          }
        ]
      }
    },
    methods: {
      openUrl (url) {
        window.open(url)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .resume {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 16px;
    padding: 0 20px;
  }
  .resume h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .resume h2 {
    margin: 10px 0;
  }
  .resume .bio {
    text-indent: 2em;
  }
  .resume .projects {
    padding: 10px 30px;
  }
  .resume .projects .title {
    font-size: 18px;
    font-weight: 600;
    position: relative;
    top: -5px;
  }
  .resume .projects .tags {
    padding: 0 10px;
  }
  .resume .projects .time {
    font-weight: normal;
    font-size: 14px;
  }
  .resume .projects .content {
    font-size: 16px;
    text-indent: 2em;
  }
  .resume .projects .content p {
    margin-bottom: 10px;
  }
</style>
