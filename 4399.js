function t(t) {
    n.extend(this, t)
}
$("#jm_qiuck_cover") && ($("#jm_qiuck_cover").fadeIn(), setTimeout(function() {
    $("#jm_qiuck_cover").fadeOut()
},
3e3));
var e = document.createEvent("HTMLEvents");
e.initEvent("change", !0, !1);
var n = {
    extend: function(t, e) {
        for (var n in e)"undefined" == typeof t[n] && (t[n] = e[n]);
        return t
    },
    addZero: function(t) {
        t = t.split("-");
        for (var e = 0; e < t.length; e++) t[e] < 10 && t[e].length < 2 && (t[e] = "0" + t[e]);
        return t.join("-")
    },
    lastCompy: function() {
        var t = [];
        return $(".infofulltimejobs").each(function(e, n) {
            var i = $(".infofulltimejobs").find('.mt_endDate').eq(e).html().split("-");
            i = parseInt(i[0]) + parseInt(i[1]);
            var r = $(".infofulltimejobs").find('.mt_companyName').eq(e).html();
            t.push({
                year: i,
                name: r
            })
        }),
        $(".infoparttimejobs").each(function(e, n) {
            var i = $(".infoparttimejobs .mt_endDate").eq(e).html().split("-");
            i = parseInt(i[0]) + parseInt(i[1]);
            var r = $(".infoparttimejobs .mt_companyName").eq(e).html();
            t.push({
                year: i,
                name: r
            })
        }),
        t.sort(function(t, e) {
            return e.year - t.year
        }),
        t[0].name
    }
};
n.extend(t.prototype, {
    textWrite: function(t) {
        t ? this.from && this.to.length > 0 && t() : this.from && this.to.length > 0 && this.to.val(this.from.html())
    },
    checkWrite: function(t) {
        this.from && this.to.length > 0 && t()
    },
    selectWrite: function(t) {
        if (this.from && this.to.length > 0) {
            for (var i = this.to.get(0).options, r = 0; r < i.length; r++) if (i[r].value == n.addZero(this.from.html())) {
                i[r].selected = !0;
                break
            }
            this.to.get(0).dispatchEvent(e)
        }
    },
    writeSex: function() {
        if (this.from && this.to.length > 0) {
            var t = this.from.html();
            t = "男" == t ? "m": "f";
            for (var e = 0; e < this.to.length; e++) if (this.to.eq(e).val() == t) {
                this.to.eq(e).attr("checked", "checked");
                break
            }
        }
    },
    writeEngRank: function() {
        if (this.from && this.to.length > 0 && this.to[0].length > 0) {
            var t = this,
            e = this.to[0].get(0).options;
            this.from.each(function(n, i) {
                var r = $(i).find(".mt_skillEngLevel").html(),
                a = $(i).find(".mt_skillEngSorce").html();
                return "专业八级" == r ? (e[4].selected = !0, $(t.to[1]).val(a), !1) : "专业四级" == r ? (e[3].selected = !0, $(t.to[1]).val(a), !1) : "大学英语六级" == r ? (e[2].selected = !0, $(t.to[1]).val(a), !1) : "大学英语四级" == r ? (e[1].selected = !0, $(t.to[1]).val(a), !1) : void 0
            })
        }
    },
    writeOtEngRank: function() {
        if (this.from && this.to.length > 0 && this.to[0].length > 0) {
            var t = this,
            e = this.to[0].get(0).options;
            this.from.each(function(n, i) {
                var r = $(i).find(".mt_otherSkillEngLevel").html(),
                a = $(i).find(".mt_otherSkillEngSorce").html();
                return "雅思" == r ? (e[4].selected = !0, $(t.to[1]).val(a), !1) : "GMAT" == r ? (e[3].selected = !0, $(t.to[1]).val(a), !1) : "GRE" == r ? (e[2].selected = !0, $(t.to[1]).val(a), !1) : "托福" == r ? (e[1].selected = !0, $(t.to[1]).val(a), !1) : void 0
            })
        }
    },
    isNot: function() {
        this.from.length > 0 ? (this.to.eq(0).click(), this.to.eq(0).attr("checked", "checked")) : (this.to.eq(0).click(), this.to.eq(1).attr("checked", "checked"))
    },
    idcardWrite: function() {
        if (this.from && this.to.length > 0) {
            var t = this.to.get(0).options,
            e = this.from.html();
            switch (e) {
            case "身份证":
                t[1].selected = !0;
                break;
            case "护照":
                t[3].selected = !0;
                break;
            case "香港永久居民身份证":
            case "澳门永久居民身份证":
            case "香港非永久居民身份证":
            case "澳门非永久居民身份证":
                t[2].selected = !0;
                break;
            default:
                t[0].selected = !0
            }
        }
    },
    selectValue: function(t, n) {
        for (var i = t.get(0).options, r = 0; r < i.length; r++) if (i[r].value == n) {
            i[r].selected = !0;
            break
        }
        t.get(0).dispatchEvent(e)
    },
    valueWrite: function(t) {
        this.from && this.to.length > 0 && this.to.val(t)
    }
});
var i = new t({
    from: $("#mt_name"),
    to: $('input[name="Name"]')
});
i.textWrite();
var r = new t({
    from: $("#mt_sex"),
    to: $('input[name="Sex"]')
});
r.writeSex();
var a = new t({
    from: $("#mt_tel"),
    to: $('input[name="Mobile"]')
});
a.textWrite();
var o = new t({
    from: $("#mt_email"),
    to: $('input[name="PersonalEmail"]')
});
o.textWrite();
var m = new t({
    from: $("#mt_birth"),
    to: $('input[name="Birthday"]')
});
m.valueWrite(n.addZero(m.from.html()));
var l = new t({
    from: $("#mt_nation"),
    to: $('select[name="Nation"]')
});
l.selectWrite();
var f = new t({
    from: $("#mt_jjlxr"),
    to: $('input[name="ContactName"]')
});
f.textWrite();
var s = new t({
    from: $("#mt_jjlxrtel"),
    to: $('input[name="ContactMobile"]')
});
s.textWrite();
var c = new t({
    from: $("#mt_maritalstatus"),
    to: $('select[name="Marry"]')
});
c.textWrite(function() {
    var t = c.to.get(0).options,
    e = c.from.html();
    switch (e) {
    case "未婚":
        t[1].selected = !0;
        break;
    case "已婚":
        t[2].selected = !0;
        break;
    default:
        t[4].selected = !0
    }
});
var d = new t({
    from: $("#mt_livecity_pro"),
    to: $('select[name="Province"]')
});
d.selectWrite();
var h = new t({
    from: $("#mt_livecity_city"),
    to: $('select[name="City"]')
});
h.selectWrite();
var v = new t({
    from: $("#mt_nativeplace"),
    to: $('select[name="Province2"]')
});
v.selectWrite();
var u = new t({
    from: $("#mt_native_city"),
    to: $('select[name="City2"]')
});
u.selectWrite();
var _ = new t({
    from: $("#mt_polistatus"),
    to: $('select[name="Political"]')
});
_.textWrite(function() {
    var t = _.from.html();
    switch (t) {
    case "共青团员":
        t = "团员";
        break;
    case "中共党员":
        t = "中共党员";
        break;
    case "中共预备党员":
        t = "预备党员";
        break;
    case "群众":
        t = "群众"
    }
    _.selectValue(_.to, t)
});
var p = n.lastCompy();
$('[name=\\"LastCompany\\"]') && p && $('[name=\\"LastCompany\\"]').val(p);
var q = new t({
    from: $(".infopledu"),
    to: $(".resume_form").children().eq(1).children(".show").children("ul")
});
q.textWrite(function() {
    var t = q.from.length;
    q.to.each(function(e, i) {
        if (t < e + 1) return ! 1;
        var r = q.from.eq(e).find(".mt_schoolName").html();
        $(i).find(".input_txt.input_w2").eq(2).val(r);
        var a = n.addZero(q.from.eq(e).find(".mt_startYear").html() + "-1"),
        o = n.addZero(q.from.eq(e).find(".mt_endYear").html() + "-1");
        $(i).find(".input_txt.input_w2").eq(0).val(a),
        $(i).find(".input_txt.input_w2").eq(1).val(o);
        var m = q.from.eq(e).find(".mt_professional").html(),
        l = q.from.eq(e).find(".mt_education").html();
        $(i).find(".input_txt.input_w2").eq(3).val(m);
        var f = $(i).find("select").eq(0).get(0).options;
        switch (l) {
        case "大学专科":
            f[5].selected = !0;
            break;
        case "大学本科-一本":
        case "大学本科-二本":
        case "大学本科-三本":
        case "海外本科":
            f[3].selected = !0;
            break;
        case "硕士研究生":
            f[2].selected = !0;
            break;
        case "博士研究生":
            f[1].selected = !0;
            break;
        case "中专":
        case "技校/职高":
        case "高中":
        case "初中":
            f[6].selected = !0
        }
    })
});
var w = new t({
    to: $("#has-work-experience"),
    from: $("#exp-list").children('div')
});
w.isNot();
var x = new t({
    to: $(".resume_form").children().eq(2).children(".show").children("ul"),
    from: $("#exp-list").children('div')
});
x.textWrite(function() {
    var t = q.from.length;
    x.to.each(function(i, r) {
        if (i <= t) {
            var a = n.addZero(x.from.eq(i).find(".mt_startDate").html() + "-1"),
            o = n.addZero(x.from.eq(i).find(".mt_endDate").html() + "-1");
            $(r).find(".input_txt.input_w2").eq(0).val(a),
            $(r).find(".input_txt.input_w2").eq(1).val(o);
            var m = x.from.eq(i).find(".mt_companyName").html();
            $(r).find(".input_txt.input_w2").eq(2).val(m);
            var l = x.from.eq(i).find(".mt_department").html();
            $(r).find(".input_txt.input_w2").eq(3).val(l);
            var f = x.from.eq(i).find(".mt_positionName").html();
            $(r).find(".input_txt.input_w2").eq(4).val(f);
            var s = x.from.eq(i).find(".mt_reterenceName").html(),
            c = x.from.eq(i).find(".mt_reterence_phone").html();
            $(r).find(".input_txt.input_w2").eq(5).val(s),
            $(r).find(".input_txt.input_w2").eq(6).val(c);
            var d = x.from.eq(i).find(".mt_workContent").children().html();
            $(r).find("textarea").eq(0).val(d);
            var h = x.from.eq(i).find(".mt_reasons").html();
            $(r).find("textarea").eq(1).val(h)
        } 
    })
});
var g = new t({
    from: $(".infoproject"),
    to: $("#has-pro-experience")
});
g.isNot();
var k = new t({
    to: $(".resume_form").children().eq(3).children(".show").children("ul"),
    from: $(".infoproject")
});
k.textWrite(function() {
    var t = q.from.length;
    k.to.each(function(e, i) {
        if (t < e + 1) return ! 1;
        var r = n.addZero(k.from.eq(e).find(".mt_prostarttime").html() + "-1"),
        a = n.addZero(k.from.eq(e).find(".mt_proendtime").html() + "-1");
        $(i).find(".input_txt.input_w2").eq(0).val(r),
        $(i).find(".input_txt.input_w2").eq(1).val(a);
        var o = k.from.eq(e).find(".mt_projectName").html();
        $(i).find(".input_txt.input_w2").eq(2).val(o);
        var m = k.from.eq(e).find(".mt_projectRemark").html();
        $(i).find("textarea").val(m)
    })
}),
$('select[name="English"]').get(0).options[1].selected = !0;
var b = new t({
    from: $(".infoEnglishSkill").find(".mt_skillEngLevel"),
    to: $("#LeveL")
});
b.textWrite(function() {
    var t = b.from.html(),
    e = b.to.get(0).options;
    switch (t) {
    case "专业八级":
        e[1].selected = !0;
        break;
    case "专业四级":
        e[2].selected = !0;
        break;
    case "大学英语六级":
        e[3].selected = !0;
        break;
    case "大学英语四级":
        e[4].selected = !0
    }
});
var W = new t({
    from: $(".infoEnglishSkill").find(".mt_skillEngSorce"),
    to: $('input[name="Garde"]')
});
W.textWrite();
var y = new t({
    from: $(".infoOtherSkill"),
    to: $('input[name="OtherLang"]')
});
y.textWrite(function() {
    y.to.val(""),
    y.from.each(function(t, e) {
        var n = $(e).find(".mt_skillOtherLang").html();
        y.to.val(y.to.val() + n + " ")
    })
});
var j = new t({
    from: $(".infotraining"),
    to: $("#has-train-experience")
});
j.isNot();
var N = new t({
    to: $(".resume_form").children().eq(6).children(".show").children("ul"),
    from: $(".infotraining")
});
N.textWrite(function() {
    var t = q.from.length;
    N.to.each(function(e, i) {
        if (t < e + 1) return ! 1;
        var r = n.addZero(N.from.eq(e).find(".mt_startDate").html() + "-1"),
        a = n.addZero(N.from.eq(e).find(".mt_endDate").html() + "-1");
        $(i).find(".input_txt.input_w2").eq(0).val(r),
        $(i).find(".input_txt.input_w2").eq(1).val(a);
        var o = N.from.eq(e).find(".mt_trainingCompany").html();
        $(i).find(".input_txt.input_w2").eq(2).val(o);
        var m = N.from.eq(e).find(".mt_trainingPlace").html();
        $(i).find(".input_txt.input_w2").eq(3).val(m);
        var l = N.from.eq(e).find(".mt_trainingName").html();
        $(i).find(".input_txt.input_w2").eq(4).val(l);
        var f = N.from.eq(e).find(".mt_certificateName").html();
        $(i).find(".input_txt.input_w2").eq(5).val(f);
        var s = N.from.eq(e).find(".mt_trainingDes").html();
        $(i).find("textarea").val(s)
    })
})
