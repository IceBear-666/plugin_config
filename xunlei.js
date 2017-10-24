$(function() {
  $(".quick-write").click(function() {
    function c(a) {
      b.extend(this, a)
    }
    var a, b, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
    $("#jm_qiuck_cover") && ($("#jm_qiuck_cover").fadeIn(), setTimeout(function() {
      $("#jm_qiuck_cover").fadeOut()
    },
    3e3)),
    a = document.createEvent("HTMLEvents"),
    a.initEvent("change", !0, !1),
    b = {
      extend: function(a, b) {
        for (var c in b)"undefined" == typeof a[c] && (a[c] = b[c]);
        return a
      },
      addZero: function(a) {
        a = a.split("-");
        for (var b = 0; b < a.length; b++) a[b] < 10 && a[b].length < 2 && (a[b] = "0" + a[b]);
        return a.join("-")
      }
    },
    b.extend(c.prototype, {
      textWrite: function(a) {
        a ? this.from && this.to.length > 0 && a() : this.from && this.to.length > 0 && this.to.val(this.from.html())
      },
      checkWrite: function(a) {
        this.from && this.to.length > 0 && a()
      },
      selectWrite: function() {
        var c, d;
        if (this.from && this.to.length > 0) {
          for (c = this.to.get(0).options, d = 0; d < c.length; d++) if (c[d].value == this.from.html()) {
            c[d].selected = !0;
            break
          }
          this.to.get(0).dispatchEvent(a)
        }
      },
      writeSex: function() {
        if (this.from && this.to.length > 0) {
          var a = this.from.html();
          "男" == a ? this.to.eq(0).click() : this.to.eq(1).click()
        }
      },
      writeSex1: function() {
        var a, b;
        if (this.from && this.to.length > 0) for (a = this.from.html(), a = "男" == a ? 0 : 1, b = 0; b < this.to.length; b++) if (this.to.eq(b).val() == a) {
          this.to.eq(b).click();
          break
        }
      },
      writeEngRank: function() {
        var a, b;
        this.from && this.to.length > 0 && this.to[0].length > 0 && (a = this, b = this.to[0].get(0).options, this.from.each(function(c, d) {
          var e = $(d).find(".mt_skillEngLevel").html(),
          f = $(d).find(".mt_skillEngSorce").html();
          return "大学英语六级" == e ? (b[2].selected = !0, $(a.to[1]).val(f), !1) : "大学英语四级" == e ? (b[1].selected = !0, $(a.to[1]).val(f), !1) : void 0
        }))
      },
      writeOtEngRank: function() {
        var a, b;
        this.from && this.to.length > 0 && this.to[0].length > 0 && (a = this, b = this.to[0].get(0).options, this.from.each(function(c, d) {
          var e = $(d).find(".mt_otherSkillEngLevel").html(),
          f = $(d).find(".mt_otherSkillEngSorce").html();
          return "雅思" == e ? (b[4].selected = !0, $(a.to[1]).val(f), !1) : "GMAT" == e ? (b[3].selected = !0, $(a.to[1]).val(f), !1) : "GRE" == e ? (b[2].selected = !0, $(a.to[1]).val(f), !1) : "托福" == e ? (b[1].selected = !0, $(a.to[1]).val(f), !1) : void 0
        }))
      },
      isNot: function() {
        this.from.length > 0 ? (this.to.eq(0).click(), this.to.eq(0).attr("checked", "checked")) : (this.to.eq(0).click(), this.to.eq(1).attr("checked", "checked"))
      },
      idcardWrite: function() {
        var a, b;
        if (this.from && this.to.length > 0) switch (a = this.to.get(0).options, b = this.from.html()) {
        case "身份证":
          a[1].selected = !0;
          break;
        case "护照":
          a[2].selected = !0;
          break;
        case "香港永久居民身份证":
        case "澳门永久居民身份证":
        case "香港非永久居民身份证":
        case "澳门非永久居民身份证":
          a[3].selected = !0;
          break;
        case "台胞证":
          a[4].selected = !0;
          break;
        default:
          a[5].selected = !0
        }
      },
      selectValue: function(b, c) {
        var e, d = b.get(0).options;
        for (e = 0; e < d.length; e++) if (d[e].value == c) {
          d[e].selected = !0;
          break
        }
        b.get(0).dispatchEvent(a)
      },
      valueWrite: function(a) {
        this.from && this.to.length > 0 && this.to.html(a)
      },
      xlSelectWrite: function() {
        if (this.from && this.to.length > 0) {
          var a = this.from.html();
          this.to.addClass("drop_show").children().each(function(b, c) {
            var d = $(c).html();
            return d == a ? ($(c).click(), !1) : void 0
          })
        }
      }
    }),
    d = new c({
      from: $("#mt_name"),
      to: $("#apply_user")
    }),
    d.textWrite(),
    e = new c({
      from: $("#mt_sex"),
      to: $(".sex")
    }),
    e.writeSex(),
    f = new c({
      from: $("#mt_sex"),
      to: $('input[name="gender"]')
    }),
    f.writeSex1(),
    g = new c({
      from: $("#mt_biryear"),
      to: $(".edit-col-first").find("#birth_year")
    }),
    g.selectWrite(),
    h = new c({
      from: $("#mt_biryear"),
      to: $("#year").find(".text")
    }),
    h.valueWrite(h.from.html()),
    i = new c({
      from: $("#mt_birmonth"),
      to: $(".edit-col-first").find("#birth_month")
    }),
    i.selectWrite(),
    j = new c({
      from: $("#mt_birmonth"),
      to: $("#month").find(".text")
    }),
    j.valueWrite(j.from.html() + "月"),
    k = new c({
      from: $("#mt_birday"),
      to: $(".edit-col-first").find("#birth_day")
    }),
    k.selectWrite(),
    l = new c({
      from: $("#mt_birday"),
      to: $("#day").find(".text")
    }),
    l.valueWrite(l.from.html()),
    m = new c({
      from: $("#mt_tel"),
      to: $("#telephone")
    }),
    m.textWrite(),
    n = new c({
      from: $("#mt_idtype"),
      to: $(".edit-col-first").find("#idcard_name")
    }),
    n.idcardWrite(),
    o = new c({
      from: $("#mt_id"),
      to: $("#cardvalue")
    }),
    o.textWrite(),
    p = new c({
      from: $("#mt_edu"),
      to: $(".edit-col-sec").find("#degree")
    }),
    p.textWrite(function() {
      var a = p.from.html(),
      b = p.to.get(0).options;
      switch (a) {
      case "大学本科-一本":
      case "大学本科-二本":
      case "大学本科-三本":
      case "海外本科":
        b[1].selected = !0;
        break;
      case "硕士研究生":
        b[2].selected = !0;
        break;
      case "博士研究生":
        b[3].selected = !0;
        break;
      default:
        b[4].selected = !0
      }
    }),
    ~
    function() {
      var b, c, d, e, f, g, h, a = $("#mt_gradutetime").html();
      if (a = a.split("-"), b = a[0], c = a[1], d = $(".edit-col-sec").find("#graduate_year"), e = $(".edit-col-sec").find("#graduate_month"), d.length > 0 && e.length > 0) {
        for (f = d.get(0).options, g = e.get(0).options, h = 0; h < f.length; h++) if (f[h].value == b) {
          f[h].selected = !0;
          break
        }
        for (h = 0; h < g.length; h++) if (g[h].value == c) {
          g[h].selected = !0;
          break
        }
      }
    } (),
    q = new c({
      from: $(".infoEnglishSkill"),
      to: [$(".edit-col-sec").find("#englishlevel"), $(".edit-col-sec").find("#englishpoint")]
    }),
    q.writeEngRank(),
    r = new c({
      from: $(".mt_schoolName"),
      to: $("#schoolname")
    }),
    r.textWrite(),
    s = new c({
      from: $(".mt_professional"),
      to: $("#major")
    }),
    s.textWrite(),
    r = new c({
      from: $(".mt_academy"),
      to: $("#aculty")
    }),
    r.textWrite(),
    t = new c({
      from: $(".infoschaward"),
      to: $("#reward")
    }),
    t.textWrite(function() {
      t.from.length > 0 && (t.to.parent().removeClass("none"), t.to.val(""), t.from.each(function(a, c) {
        var g, d = $(c).find(".mt_awardsName").html(),
        e = b.addZero($(c).find(".mt_awardsDate").html() + "-1");
        $(c).find(".mt_awardsType").html(),
        g = $(c).find(".mt_awardsLevel").html(),
        t.to.val(t.to.val() + (a + 1) + ". " + e + " " + d + " " + g + "\\n")
      }))
    }),
    u = new c({
      to: $("#activity"),
      from: $(".infoparttimejobs")
    }),
    u.textWrite(function() {
      u.from.length > 0 && (u.to.parent().removeClass("none"), u.to.val(""), u.from.each(function(a, b) {
        var c = $(b).find(".mt_companyName"),
        d = $(b).find(".mt_startDate"),
        e = $(b).find(".mt_endDate"),
        f = $(b).find(".mt_positionName"),
        g = $(b).find(".mt_workContent");
        u.to.val(u.to.val() + (a + 1) + ". " + c.html() + "  " + d.html() + "~" + e.html() + "  " + f.html() + "  " + g.children().html() + "\\n")
      }))
    }),
    v = new c({
      to: $(".write_form").eq(2),
      from: $(".infoproject")
    }),
    v.textWrite(function() {
      var a = v.from.length;
      v.to.each(function(b, c) {
        var d, e;
        return b + 1 > a ? !1 : (d = v.from.eq(b).find(".mt_projectName").html(), $(c).find("#proname").val(d), e = v.from.eq(b).find(".mt_projectRemark").html(), $(c).find("#prodesc").val(e), void 0)
      })
    }),
    w = new c({
      to: $(".show-col-third").children(".project"),
      from: $(".infoproject")
    }),
    w.textWrite(function() {
      var a = w.from.length;
      w.to.each(function(b, c) {
        var d, e, f, g, h, i, j, k;
        return b + 1 > a ? !1 : (d = w.from.eq(b).find(".mt_prostarttime").html(), e = w.from.eq(b).find(".mt_proendtime").html(), f = d.split("-")[0], g = d.split("-")[1], h = e.split("-")[0], i = e.split("-")[1], console.log(f), console.log(g), console.log(h), console.log(i), w.selectValue($(c).find("#startday_year"), f), w.selectValue($(c).find("#startday_month"), g), w.selectValue($(c).find("#endday_year"), h), w.selectValue($(c).find("#endday_month"), i), j = w.from.eq(b).find(".mt_projectName").html(), $(c).find("#proname").val(j), k = w.from.eq(b).find(".mt_projectRemark").html(), $(c).find("#prodesc").val(k), void 0)
      })
    })
  })
});