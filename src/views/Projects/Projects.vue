<template>
  <div id="" class="projectpage container-fluid">
    <div class="row">
      <h2>المشاريع</h2>
      <div class="container">
        <ul class="projects-tags">
          <button id="all" class="active">All</button>
        </ul>
        <div class="row">
          <ul class="projects-list">
            <li
              v-for="(item, index) in projects"
              :key="index"
              class="col-3 project"
              :data-tags="item.href"
            >
              <img :src="item.image" class="img-fluid" alt="" />
              <div class="project-info">
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.detalis.substring(0, 110) + "..." }}
                </p>
                <div class="project-btns">
                  <router-link
                    :to="'/projects/Projectdetails/' + item.id"
                    class="project-btn"
                    ><i class="fa fa-external-link"></i>Show
                  </router-link>
                </div>
                <!-- /.project-btns -->
              </div>

              <!-- /.project-info -->
            </li>
          </ul>
        </div>
        <!-- /.projects-list -->
      </div>

      
   
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // items: [
      //   {
      //     id: 1,
      //     title: "HTML,Sass, UI",
      //     href: "HTML,Sass, UI",
      //     dot: ".",
      //     children: [
      //       {
      //         image:
      //           "https://www.dropbox.com/s/4ndmldp1edhdo7i/Blog-posts.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/c8p3wy2n4wd8jgc/Pizza_card.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //     ],
      //   },

      //   {
      //     id: 2,
      //     title: "HTML,CSS,PSD,Bootstrap",
      //     href: "HTML,CSS,PSD,Bootstrap",
      //     dot: ".",
      //     children: [
      //       {
      //         image:
      //           "https://www.dropbox.com/s/gqvlp97j1muij0y/App_Onepage.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //     ],
      //   },
      //   {
      //     id: 3,
      //     title: "HTML,CSS,jQuery",
      //     href: "HTML,CSS,jQuery",
      //     dot: ".",
      //     children: [
      //       {
      //         image:
      //           "https://www.dropbox.com/s/439g2tkjshppz1o/Countries.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //     ],
      //   },
      //   {
      //     id: 4,
      //     title: "HTML, CSS, Bootstrap, jQuery",
      //     href: "HTML, CSS, Bootstrap, jQuery",
      //     dot: ".",
      //     children: [
      //       {
      //         image:
      //           "https://www.dropbox.com/s/ezjix1jmj1yynhq/Landing_page.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //     ],
      //   },
      //   {
      //     id: 5,
      //     title: "HTML,CSS",
      //     href: "HTML,CSS",
      //     dot: ".",
      //     children: [
      //       {
      //         image:
      //           "https://www.dropbox.com/s/4rsvlxjwjd314vr/Travel_onepage.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //     ],
      //   },
      //   {
      //     id: 6,
      //     title: "JS,jQuery",
      //     href: "JS,jQuery",
      //     dot: ".",
      //     children: [
      //       {
      //         image:
      //           "https://www.dropbox.com/s/2ht000r5kd7wjp9/Quotes_rotator.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/5dpyvb2n2o9javv/Memory_game.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/6pb669d7v7vwf2k/Pricing_table.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/tkmxz04kcna22eg/Social_Card.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/7bcwoudaa60bp4e/Movie_card.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/fai1qm07d9nhwba/Hover_boxes.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/qhzsxylwggfih97/Autocomplete_UI.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //     ],
      //   },
      //   {
      //     id: 7,
      //     title: "HTML,Sass",
      //     href: "HTML,Sass",
      //     dot: ".",
      //     children: [
      //       {
      //         image:
      //           "https://www.dropbox.com/s/6lh0zeko69ydxzz/Service_boxes.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/zper2pb96wf72tn/Login_form.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/287iki85wzooxgt/CSS_Accordion.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/jl4f24byocx40on/CSS_Tabs.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //       {
      //         image:
      //           "https://www.dropbox.com/s/ssc413p61af5vib/CSS_Tooltip.png?raw=1",
      //         title: "App One Page",
      //         span: "  Strona powstała poprzez przeniesienie darmowego PSD do HTML przypomocy siatki Bootstrap oraz programu Gimp.",
      //       },
      //     ],
      //   },
      // ],
      projects: [],
      project: [],
    };
  },
  methods: {
    dataitem(id) {
      this.project = this.items[id];
    },
  },

  async mounted() {
    let result = await axios.get("http://localhost:3000/projects");
    this.projects = result.data;
    console.log(this.projects);

    $(document).ready(function () {
      var $projectsList = $(".projects-list");
      var $projects = $projectsList.find(".project");
      var $projectsTags = $(".projects-tags");
      var tagsObj = {};
      var fadeSpeed = 500;

      $projects.each(function () {
        var project = this;
        var $project = $(this);
        var $tagsList = $project.find(".tags");
        var tags = $project.data("tags").split(",");
        tags.forEach(function (tag) {
          // var li = '<li class="tag">';
          // li += tag;
          // li += "</li>";
          // $tagsList.append($(li));
          //same li or $(li)?

          if (!tagsObj.hasOwnProperty(tag)) tagsObj[tag] = [];
          tagsObj[tag].push(project);
        });
      });

      //console.log(tagsObj);
      $.each(tagsObj, function (tag) {
        var $button = $("<button>" + tag + "</button>");
        $button
          .on("click", function () {
            if ($projects.is(":animated")) return false;
            $(this).addClass("active").siblings().removeClass("active");
            $projects.filter(":visible").fadeOut(fadeSpeed, function () {
              $projects.filter(tagsObj[tag]).fadeIn(fadeSpeed);
            });
          })
          .appendTo($projectsTags);
      });

      $("#all").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $projects.filter(":visible").fadeOut(fadeSpeed, function () {
          $projects.fadeIn(fadeSpeed);
        });
      });
    });
  },
};
</script>
<style>
.projects-tags {
  padding: 20px 10px;
  text-align: center;
}
.projects-tags button {
  display: inline-block;
  background: #001e4a;
  color: #fff;
  font-size: 17px;
  line-height: 20px;
  margin: 0 3px;
  padding: 15px;
  font-weight: 400;
  cursor: pointer;
  border: 3px #001e4a solid;
}
.projects-tags button:hover,
.projects-tags button.active {
  background-color: #fff;
  color: #001e4a;
}
.project {
  width: 31.333%;
  float: right;
  margin: 1%;
  background: #fff;
  position: relative;
  overflow: hidden;
  /* box-shadow: 0px 10px 5px -5px rgba(255 255 255 / 0.3); */
  box-shadow: 0px 10px 5px -5px rgba(164 164 164 / 30%);
  font-size: 0;
}
.project img {
  max-width: 100%;
  transition: all 0.4s ease;
}
.project .project-info {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: calc(-100% + 65px);
  padding: 10px 30px;
  /* background-color: rgba(#fff, 0.7); */
  background-color: rgb(255 255 255 / 0.7);
  transition: all 0.4s ease;
  font-size: 14px;
  line-height: 20px;
}
.project .project-info h3 {
  font-size: 20px;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  line-height: 30px;
  margin: 15px 0;
}
.project .project-info p {
  transition: all 1s ease;
  opacity: 0;
}
.project:hover .project-info {
  bottom: 0;
}
.project:hover .project-info p {
  opacity: 1;
}
.project:hover img {
  transform: scale(1.2) rotate(3deg);
}
.project .project-btns {
  text-align: center;
  margin-top: 20px;
}
.project .project-btns .project-btn {
  background: #001e4a;
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 5px 10px;
  font-size: 13px;
  line-height: 20px;
  width: 100px;
  /* text-align: center; */
}
.project .project-btns .project-btn:hover {
  background: #fff;
  color: #001e4a;
}
</style>
