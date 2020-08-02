(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    13: function (e, t, n) {
      e.exports = n(25);
    },
    18: function (e, t, n) {},
    19: function (e, t, n) {},
    22: function (e, t, n) {},
    25: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(12),
        l = n.n(o),
        i = (n(18), n(6)),
        c = n(7),
        u = n(9),
        s = n(8),
        m = (n(19), n(26)),
        d = n(27),
        h = n(32),
        y = (function (e) {
          Object(u.a)(n, e);
          var t = Object(s.a)(n);
          function n(e) {
            var a;
            return (
              Object(i.a)(this, n),
              ((a = t.call(this, e)).state = {
                msg: a.props.msg ? a.props.msg : "Log In",
              }),
              a
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: "doTheLogin",
                value: function () {
                  window.open("http://localhost:8888");
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      h.a,
                      { className: "btn-round ml-auto", color: "success" },
                      r.a.createElement("i", {
                        className: "tim-icons icon-single-02",
                      }),
                      " ",
                      this.state.msg
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.a.Component),
        p =
          (n(22),
          (function (e) {
            Object(u.a)(n, e);
            var t = Object(s.a)(n);
            function n() {
              return Object(i.a)(this, n), t.apply(this, arguments);
            }
            return (
              Object(c.a)(n, [
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        m.a,
                        {
                          "color-on-scroll": "100",
                          className: "navbar-transparent tuneinnav sticky-top",
                          expand: "lg",
                        },
                        r.a.createElement(
                          d.a,
                          {
                            href: "#",
                            onClick: function (e) {
                              return e.preventDefault();
                            },
                          },
                          r.a.createElement(
                            "h3",
                            { id: "content", style: { margin: 0 } },
                            "TuneIn"
                          )
                        ),
                        r.a.createElement(y, null)
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(r.a.Component)),
        f = n(28),
        k = (r.a.Component, n(29)),
        v = n(30),
        w = n(31),
        b = (function (e) {
          Object(u.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            var e;
            return (
              Object(i.a)(this, n),
              ((e = t.call(this)).state = {
                loggedIn: !0,
                topTracks: window.token,
                topArtists: window.token2,
                user_id: "",
              }),
              e
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: "getTops",
                value: function () {
                  this.setState({
                    topTracks: window.token,
                    topArtists: window.token2,
                  });
                },
              },
              {
                key: "renderTracksTableData",
                value: function () {
                  var e = 0;
                  return this.state.topTracks.map(function (t) {
                    e++;
                    var n = t.name,
                      a = t.artists
                        .map(function (e) {
                          return e.name;
                        })
                        .join(", "),
                      o = t.preview_url;
                    return r.a.createElement(
                      "tr",
                      { key: n },
                      r.a.createElement("td", null, e),
                      r.a.createElement("td", null, n),
                      r.a.createElement("td", null, a),
                      r.a.createElement(
                        "td",
                        null,
                        r.a.createElement("a", { href: o }, " Click to listen ")
                      )
                    );
                  });
                },
              },
              {
                key: "renderTableHeader",
                value: function () {
                  return ["Rank", "Name", "Artist(s)", "Preview"].map(function (
                    e
                  ) {
                    return r.a.createElement("th", { key: e }, e.toUpperCase());
                  });
                },
              },
              {
                key: "renderTrackTable",
                value: function () {
                  return (
                    this.getTops(),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("h1", { id: "title" }, "Top Tracks"),
                      r.a.createElement(
                        "table",
                        { id: "tracks" },
                        r.a.createElement(
                          "tbody",
                          null,
                          r.a.createElement(
                            "tr",
                            null,
                            " ",
                            this.renderTracksTableHeader(),
                            " "
                          ),
                          this.renderTracksTableData()
                        )
                      )
                    )
                  );
                },
              },
              {
                key: "renderArtistsTableData",
                value: function () {
                  var e = 0;
                  return this.state.topArtists.map(function (t) {
                    var n = t.name;
                    return (
                      e++,
                      r.a.createElement(
                        "tr",
                        { key: n },
                        r.a.createElement("td", null, e),
                        r.a.createElement("td", null, n)
                      )
                    );
                  });
                },
              },
              {
                key: "renderArtistsTableHeader",
                value: function () {
                  return ["Rank", "Name"].map(function (e) {
                    return r.a.createElement("th", { key: e }, e.toUpperCase());
                  });
                },
              },
              {
                key: "renderArtistTable",
                value: function () {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("h1", { id: "title" }, "Artists"),
                    r.a.createElement(
                      "table",
                      { id: "tracks" },
                      r.a.createElement(
                        "tbody",
                        null,
                        r.a.createElement(
                          "tr",
                          null,
                          " ",
                          this.renderArtistsTableHeader(),
                          " "
                        ),
                        this.renderArtistsTableData()
                      )
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(p, null),
                    r.a.createElement(
                      "div",
                      { className: "App" },
                      r.a.createElement(
                        "div",
                        null,
                        !this.state.loggedIn &&
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(
                              "h1",
                              null,
                              "Do you even know a brother?"
                            ),
                            r.a.createElement(
                              k.a,
                              null,
                              r.a.createElement(
                                v.a,
                                { className: "justify-content-md-center" },
                                r.a.createElement(
                                  w.a,
                                  { lg: "6" },
                                  r.a.createElement(
                                    "p",
                                    null,
                                    "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo."
                                  )
                                )
                              )
                            ),
                            r.a.createElement("br", null),
                            r.a.createElement(
                              "a",
                              { href: "http://localhost:5000" },
                              " ",
                              r.a.createElement(y, {
                                msg: "Log In To Spotify Now, CMON!!!!",
                              }),
                              " "
                            )
                          )
                      ),
                      r.a.createElement("div", null, window.token),
                      r.a.createElement("div", null, window.token2)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(a.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      n(23), n(24);
      l.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(b, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.9c39591c.chunk.js.map
