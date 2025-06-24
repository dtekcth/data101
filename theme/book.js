"use strict";

// Fix back button cache problem
window.onunload = function () {};

function textNodesUnder(el) {
  var n,
    a = [],
    walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while ((n = walk.nextNode())) a.push(n);
  return a;
}

const hideAll = (elList) => {
  elList.forEach((other) => {
    Array.from(document.getElementsByClassName(other)).forEach((el) => {
      el.style.display = "none";
    });
  });
};

const showAll = (elList) => {
  elList.forEach((other) => {
    Array.from(document.getElementsByClassName(other)).forEach((el) => {
      el.style.display = null;
    });
  });
};

/* DAT101 specific code */
//

(function ReadingTime() {
  const wordCount = (el) => {
    return el.innerText.match(regex).length;
  };

  const readingTime = (el) => {
    const WORDS_PER_MINUTE = 200;
    result.readingTime = Math.ceil(wordCount(el) / WORDS_PER_MINUTE);
    return result;
  };
})();

(function ClassPreproccessor() {
  const getSolutionParent = (node) => {
    if (node.classList && node.classList.contains("solution")) return node;
    if (node.parentNode) return getSolutionParent(node.parentNode);
    return undefined;
  };

  const createTask = (el) => {
    const heading = document.createElement("div");
    heading.classList.add("task-heading");
    heading.innerText = "Task";

    const container = document.createElement("blockquote");
    container.classList.add("task");
    container.appendChild(heading);
    el.replaceWith(container);
    container.appendChild(el);
  };

  const createSolution = (el) => {
    const heading = document.createElement("div");
    heading.classList.add("task-heading");
    heading.innerText = "Solution";

    const placeholder = document.createElement("div");
    placeholder.classList.add("placeholder");
    placeholder.innerText = "Click to see answer";

    const container = document.createElement("blockquote");
    container.classList.add("task");
    container.classList.add("solution");
    container.appendChild(heading);
    container.appendChild(placeholder);

    el.replaceWith(container);
    el.classList.add("hidden");
    el.classList.add("spoiler");
    container.appendChild(el);
  };

  const setBackground = (el, style) => {
    el.parentElement.classList.add(`bg-${style}`);
  };

  // Can't listen on the spoiler directly as
  // there is something capturing the event on the page
  document.addEventListener("click", (ev) => {
    const solutionEl = getSolutionParent(ev.target);
    if (solutionEl) {
      solutionEl.querySelector(".spoiler").classList.remove("hidden");
      solutionEl.querySelector(".placeholder").classList.add("hidden");
    }
  });

  const removeTodoInProduction = () => {
    if (window.location.hostname === "data101.dtek.se") {
      document.querySelectorAll("blockquote").forEach((e) => {
        console.log(e.innerText);
        if (e.innerText.match(/TODO/i) !== null) {
          e.remove();
        }
      });
    }
  };

  const matchExerciseMacro = (node) => {
    if (node.parentElement === null) return;

    node.nodeValue = node.nodeValue
      .replace(/^(.)?(\[\s*([A-Za-z0-9]+)\s*\])/, (matches, first, second, third) => {
          // Ignore if preceded by a backslash
          if (first === "\\") return second;

          if (node.parentElement.nodeName === "P") node = node.parentElement;

          const cmd = third;
          switch (cmd) {
            case "Task":
              return createTask(node);
            case "Solution":
              return createSolution(node);
            case "Danger":
              return node.parentElement.classList.add("danger");
            case "Warning":
              return node.parentElement.classList.add("warning");
          }

          return first ? first : "";
      });
  };

  const matchBlockMacro = (node) => {
    if (node.parentElement === null) return;

    node.nodeValue = node.nodeValue
      .replace(/(.)?({{\s*((\.[A-Za-z\-0-9]+)+)\s*}})/, (matches, first, second, third) => {
        // Ignore if preceded by a backslash
        if (first === "\\") return second;

        third
          .split(".")
          .filter((s) => s !== "")
          .map((s) => s.trim())
          .forEach((c) => node.parentElement.classList.add(c));

        return first ? first : "";
      });
  };

  const matchCodeMacro = (node) => {
    if (node.nextSibling === null || node.parentElement === null) return;
    const matches = node.nodeValue.match(/{{\s*((\.[A-Za-z\-0-9]+)+)\s*}}$/);
    if (matches && matches[1]) {
      // Add classes to parent
      matches[1]
        .split(".")
        .filter((s) => s !== "")
        .map((s) => s.trim())
        .forEach((c) => node.nextSibling.classList.add(c.trim()));
      node.nodeValue = node.nodeValue.replace(matches[0], "");
    }
  };

  const BeginLongBlockRegex = /^{{\s*begin\s+((\.[A-Za-z\-0-9]+)+)\s*}}/;
  const EndLongBlockRegex = /^{{\s*end\s*}}/;

  const applyClasses = (el, classes) => {
    if (el.innerText) {
      const matches = el.innerText.match(EndLongBlockRegex);
      if (matches !== null) {
        el.remove();
        return;
      } else {
        classes.forEach((c) => el.classList.add(c.trim()));
      }
    }
    if (el.nextSibling) applyClasses(el.nextSibling, classes);
  };
  const matchLongBlockMacro = (node) => {
    if (node.parentElement === null) return;
    const matches = node.nodeValue.match(BeginLongBlockRegex);
    if (matches && matches[1]) {
      const classes = matches[1]
        .split(".")
        .filter((s) => s !== "")
        .map((s) => s.trim());

      node.nodeValue = node.nodeValue.replace(matches[0], "");
      applyClasses(node.parentElement, classes);
    }
  };

  const textNodes = textNodesUnder(document.documentElement);
  textNodes.forEach((node) => {
    matchLongBlockMacro(node);
    matchBlockMacro(node);
    matchExerciseMacro(node);
    // matchCodeMacro(node);
  });
  removeTodoInProduction();
})();

(function OperatingSystem() {
  let os = localStorage.getItem("mdbook-os");
  if (os === null) {
    os = "all";
  }
  const icons = {
    macos: "fa-apple",
    linux: "fa-linux",
    windows: "fa-windows",
    all: "fa-linux fa-apple fa-windows",
  };

  const setOS = (newOS) => {
    os = newOS;
    localStorage.setItem("mdbook-os", os);
    promptForValues();
  };

  let programme = localStorage.getItem("mdbook-programme");
  if (programme === null) programme = "all";
  const colors = {
    Data: "orange",
    IT: "#008CBA",
    DV: "#188BDE",
  };

  const setProgramme = (newProgramme) => {
    programme = newProgramme;
    localStorage.setItem("mdbook-programme", programme);
    promptForValues();
  };

  const promptForValues = () => {
    // document.getElementById("meta-prompt").classList.add("hidden");
    if (
      !localStorage.getItem("mdbook-programme") ||
      !localStorage.getItem("mdbook-os")
    ) {
      document.getElementById("alert-selection").classList.remove("hidden");

      // const promptEl = document.getElementById("meta-prompt");
      // promptEl.classList.remove("hidden");
      // promptEl.addEventListener("click", (ev) => {
      //   if (ev.target.dataset["os"]) {
      //     promptEl
      //       .querySelectorAll(".selected[data-os]")
      //       .forEach((el) => el.classList.remove("selected"));

      //     ev.target.classList.add("selected");
      //     setOS(ev.target.dataset["os"]);
      //   }

      //   if (ev.target.dataset["programme"]) {
      //     promptEl
      //       .querySelectorAll(".selected[data-programme]")
      //       .forEach((el) => el.classList.remove("selected"));
      //     ev.target.classList.add("selected");
      //     setProgramme(ev.target.dataset["programme"]);
      //   }

      //   promptForValues();
      // });
    } else {
      // document.getElementById("meta-prompt").classList.add("hidden");
      document.getElementById("alert-selection").classList.add("hidden");
    }
  };

  const isCodeBlock = (el) => {
    if (el.tagName === "CODE") return true;
    else if (el.parentElement === null) return false;
    else return isCodeBlock(el.parentElement);
  };

  window.addEventListener("load", () => {
    const allOS = ["macos", "linux", "windows"];
    const osToggleButton = document.getElementById("os-toggle");
    const osList = document.getElementById("os-list");
    const osOptions = Array.from(osList.getElementsByTagName("button", osList));

    // Replace all !kbd and !icon commands with their HTML equivalents.
    textNodesUnder(
      document.getElementById("content")
    ).forEach((n) => {
      if (!n.parentElement || !n.parentElement.innerHTML) return;

      n.parentElement.innerHTML = n.parentElement.innerHTML
        .replace(/(.)?!kbd\[(.*?)\]/g, (match, first, second) => {
          // Ignore if preceded by a backslash
          if (first === "\\") return match.slice(1);

          const shortcut = second
            .replace(/!ctrl/, "<span data-context-ctrl>ctrl</span>")
            .replace(/!cmd/, "⌘")
            .replace(/!win/, "<span class='fa fa-windows'></span>");
          return `${first}<code class='kbd-shortcut'>${shortcut}</code>`;
        })
        .replace(/(.)?!icon\[(.*)\]/g, (match, prefix, icon) => {
          // Ignore if preceded by a backslash
          if (prefix === "\\") return match.slice(1);

          return `<span class='fa fa-${icon}'></span>`;
        });
    });

    const applyOsOptions = () => {
      if (os === "all") {
        showAll(allOS);
      } else {
        hideAll(allOS.filter((s) => s !== os));
        showAll([os]);
      }

      // Set icons
      osToggleButton.innerHTML = icons[os]
        .split(" ")
        .map((icon) => `<i class="fa ${icon}"></i>`)
        .join("");

      // Update OS specific shortcut keys.
      const ctrlNodes = document.querySelectorAll("[data-context-ctrl]");
      const ctrlKey = os === "macos" ? "⌘" : "Ctrl";
      ctrlNodes.forEach((t) => {
        t.innerText = ctrlKey;
      });
    };
    applyOsOptions();

    const hideHandler = (event) => {
      // If user clicks inside the element, do nothing
      if (event.target.closest("#os-list")) return;
      if (event.target.closest("#os-toggle")) return;
      // If user clicks outside the element, hide it!
      osList.style.display = "none";
      document.removeEventListener("click", hideHandler);
    };

    osToggleButton.addEventListener("click", () => {
      osList.style.display = "block";
      osList.style.left = `${osToggleButton.offsetLeft}px`;
      setTimeout(() => {
        document.addEventListener("click", hideHandler);
      }, 300);
    });

    osOptions.forEach((el) => {
      el.addEventListener("click", () => {
        setOS(el.dataset.option);
        applyOsOptions();

        osList.style.display = "none";
      });
    });
  });

  window.addEventListener("load", () => {
    const allProgrammes = ["Data", "DV", "IT"];
    const programmeToggleButton = document.getElementById("programme-toggle");
    const programmeList = document.getElementById("programme-list");
    const programmeOptions = Array.from(
      programmeList.getElementsByTagName("button", programmeList)
    );

    const applyProgrammeOptions = () => {
      if (programme === "all") {
        showAll(allProgrammes);
      } else {
        hideAll(allProgrammes.filter((s) => s !== programme));
        showAll([programme]);
      }

      if (programme === "all") {
        document.documentElement.style.setProperty("--display-D", "block");
        document.documentElement.style.setProperty("--display-IT", "block");
        document.documentElement.style.setProperty("--display-DV", "block");
      } else {
        document.documentElement.style.setProperty("--display-D", "none");
        document.documentElement.style.setProperty("--display-IT", "none");
        document.documentElement.style.setProperty("--display-DV", "none");
        document.documentElement.style.setProperty(
          `--display-${programme}`,
          "block"
        );
      }

      const programmeText = programme === "all" ? "All programmes" : programme;
      programmeToggleButton.innerHTML = `<span style='color: ${colors[programme]}'>${programmeText}</span>`;
    };
    applyProgrammeOptions();

    const hideHandler = (event) => {
      // If user clicks inside the element, do nothing
      if (event.target.closest("#programme-list")) return;
      if (event.target.closest("#programme-toggle")) return;
      // If user clicks outside the element, hide it!
      programmeList.style.display = "none";
      document.removeEventListener("click", hideHandler);
    };

    programmeToggleButton.addEventListener("click", () => {
      programmeList.style.display = "block";
      programmeList.style.left = `${programmeToggleButton.offsetLeft}px`;
      setTimeout(() => {
        document.addEventListener("click", hideHandler);
      }, 300);
    });

    programmeOptions.forEach((el) => {
      el.addEventListener("click", () => {
        setProgramme(el.dataset.option);
        applyProgrammeOptions();

        programmeList.style.display = "none";
      });
    });
  });

  promptForValues();
})();

/* END DAT101 */

// Global variable, shared between modules
function playground_text(playground) {
  let code_block = playground.querySelector("code");

  if (window.ace && code_block.classList.contains("editable")) {
    let editor = window.ace.edit(code_block);
    return editor.getValue();
  } else {
    return code_block.textContent;
  }
}

(function codeSnippets() {
  function fetch_with_timeout(url, options, timeout = 6000) {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), timeout)
      ),
    ]);
  }

  var playgrounds = Array.from(document.querySelectorAll(".playground"));
  if (playgrounds.length > 0) {
    fetch_with_timeout("https://play.rust-lang.org/meta/crates", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        // get list of crates available in the rust playground
        let playground_crates = response.crates.map((item) => item["id"]);
        playgrounds.forEach((block) =>
          handle_crate_list_update(block, playground_crates)
        );
      });
  }

  function handle_crate_list_update(playground_block, playground_crates) {
    // update the play buttons after receiving the response
    update_play_button(playground_block, playground_crates);

    // and install on change listener to dynamically update ACE editors
    if (window.ace) {
      let code_block = playground_block.querySelector("code");
      if (code_block.classList.contains("editable")) {
        let editor = window.ace.edit(code_block);
        editor.addEventListener("change", function (e) {
          update_play_button(playground_block, playground_crates);
        });
        // add Ctrl-Enter command to execute rust code
        editor.commands.addCommand({
          name: "run",
          bindKey: {
            win: "Ctrl-Enter",
            mac: "Ctrl-Enter",
          },
          exec: (_editor) => run_rust_code(playground_block),
        });
      }
    }
  }

  // updates the visibility of play button based on `no_run` class and
  // used crates vs ones available on http://play.rust-lang.org
  function update_play_button(pre_block, playground_crates) {
    var play_button = pre_block.querySelector(".play-button");

    // skip if code is `no_run`
    if (pre_block.querySelector("code").classList.contains("no_run")) {
      play_button.classList.add("hidden");
      return;
    }

    // get list of `extern crate`'s from snippet
    var txt = playground_text(pre_block);
    var re = /extern\s+crate\s+([a-zA-Z_0-9]+)\s*;/g;
    var snippet_crates = [];
    var item;
    while ((item = re.exec(txt))) {
      snippet_crates.push(item[1]);
    }

    // check if all used crates are available on play.rust-lang.org
    var all_available = snippet_crates.every(function (elem) {
      return playground_crates.indexOf(elem) > -1;
    });

    if (all_available) {
      play_button.classList.remove("hidden");
    } else {
      play_button.classList.add("hidden");
    }
  }

  function run_rust_code(code_block) {
    var result_block = code_block.querySelector(".result");
    if (!result_block) {
      result_block = document.createElement("code");
      result_block.className = "result hljs language-bash";

      code_block.append(result_block);
    }

    let text = playground_text(code_block);
    let classes = code_block.querySelector("code").classList;
    let edition = "2015";
    if (classes.contains("edition2018")) {
      edition = "2018";
    } else if (classes.contains("edition2021")) {
      edition = "2021";
    }
    var params = {
      version: "stable",
      optimize: "0",
      code: text,
      edition: edition,
    };

    if (text.indexOf("#![feature") !== -1) {
      params.version = "nightly";
    }

    result_block.innerText = "Running...";

    fetch_with_timeout("https://play.rust-lang.org/evaluate.json", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.result.trim() === "") {
          result_block.innerText = "No output";
          result_block.classList.add("result-no-output");
        } else {
          result_block.innerText = response.result;
          result_block.classList.remove("result-no-output");
        }
      })
      .catch(
        (error) =>
          (result_block.innerText =
            "Playground Communication: " + error.message)
      );
  }

  // Syntax highlighting Configuration
  hljs.configure({
    tabReplace: "    ", // 4 spaces
    languages: [], // Languages used for auto-detection
  });

  let code_nodes = Array.from(document.querySelectorAll("code"))
    // Don't highlight `inline code` blocks in headers.
    .filter(function (node) {
      return !node.parentElement.classList.contains("header");
    });

  if (window.ace) {
    // language-rust class needs to be removed for editable
    // blocks or highlightjs will capture events
    code_nodes
      .filter(function (node) {
        return node.classList.contains("editable");
      })
      .forEach(function (block) {
        block.classList.remove("language-rust");
      });

    Array;
    code_nodes
      .filter(function (node) {
        return !node.classList.contains("editable");
      })
      .forEach(function (block) {
        hljs.highlightBlock(block);
      });
  } else {
    code_nodes.forEach(function (block) {
      hljs.highlightBlock(block);
    });
  }

  // Adding the hljs class gives code blocks the color css
  // even if highlighting doesn't apply
  code_nodes.forEach(function (block) {
    block.classList.add("hljs");
  });

  Array.from(document.querySelectorAll("code.language-rust")).forEach(function (
    block
  ) {
    var lines = Array.from(block.querySelectorAll(".boring"));
    // If no lines were hidden, return
    if (!lines.length) {
      return;
    }
    block.classList.add("hide-boring");

    var buttons = document.createElement("div");
    buttons.className = "buttons";
    buttons.innerHTML =
      '<button class="fa fa-eye" title="Show hidden lines" aria-label="Show hidden lines"></button>';

    // add expand button
    var pre_block = block.parentNode;
    pre_block.insertBefore(buttons, pre_block.firstChild);

    pre_block.querySelector(".buttons").addEventListener("click", function (e) {
      if (e.target.classList.contains("fa-eye")) {
        e.target.classList.remove("fa-eye");
        e.target.classList.add("fa-eye-slash");
        e.target.title = "Hide lines";
        e.target.setAttribute("aria-label", e.target.title);

        block.classList.remove("hide-boring");
      } else if (e.target.classList.contains("fa-eye-slash")) {
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
        e.target.title = "Show hidden lines";
        e.target.setAttribute("aria-label", e.target.title);

        block.classList.add("hide-boring");
      }
    });
  });

  if (window.playground_copyable) {
    Array.from(document.querySelectorAll("pre code")).forEach(function (block) {
      var pre_block = block.parentNode;
      if (!pre_block.classList.contains("playground")) {
        var buttons = pre_block.querySelector(".buttons");
        if (!buttons) {
          buttons = document.createElement("div");
          buttons.className = "buttons";
          pre_block.insertBefore(buttons, pre_block.firstChild);
        }

        var clipButton = document.createElement("button");
        clipButton.className = "fa fa-copy clip-button";
        clipButton.title = "Copy to clipboard";
        clipButton.setAttribute("aria-label", clipButton.title);
        clipButton.innerHTML = '<i class="tooltiptext"></i>';

        buttons.insertBefore(clipButton, buttons.firstChild);
      }
    });
  }

  // Process playground code blocks
  Array.from(document.querySelectorAll(".playground")).forEach(function (
    pre_block
  ) {
    // Add play button
    var buttons = pre_block.querySelector(".buttons");
    if (!buttons) {
      buttons = document.createElement("div");
      buttons.className = "buttons";
      pre_block.insertBefore(buttons, pre_block.firstChild);
    }

    var runCodeButton = document.createElement("button");
    runCodeButton.className = "fa fa-play play-button";
    runCodeButton.hidden = true;
    runCodeButton.title = "Run this code";
    runCodeButton.setAttribute("aria-label", runCodeButton.title);

    buttons.insertBefore(runCodeButton, buttons.firstChild);
    runCodeButton.addEventListener("click", function (e) {
      run_rust_code(pre_block);
    });

    if (window.playground_copyable) {
      var copyCodeClipboardButton = document.createElement("button");
      copyCodeClipboardButton.className = "fa fa-copy clip-button";
      copyCodeClipboardButton.innerHTML = '<i class="tooltiptext"></i>';
      copyCodeClipboardButton.title = "Copy to clipboard";
      copyCodeClipboardButton.setAttribute(
        "aria-label",
        copyCodeClipboardButton.title
      );

      buttons.insertBefore(copyCodeClipboardButton, buttons.firstChild);
    }

    let code_block = pre_block.querySelector("code");
    if (window.ace && code_block.classList.contains("editable")) {
      var undoChangesButton = document.createElement("button");
      undoChangesButton.className = "fa fa-history reset-button";
      undoChangesButton.title = "Undo changes";
      undoChangesButton.setAttribute("aria-label", undoChangesButton.title);

      buttons.insertBefore(undoChangesButton, buttons.firstChild);

      undoChangesButton.addEventListener("click", function () {
        let editor = window.ace.edit(code_block);
        editor.setValue(editor.originalCode);
        editor.clearSelection();
      });
    }
  });
})();

(function themes() {
  var html = document.querySelector("html");
  var themeToggleButton = document.getElementById("theme-toggle");
  var themePopup = document.getElementById("theme-list");
  var themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
  var stylesheets = {
    ayuHighlight: document.querySelector("[href$='ayu-highlight.css']"),
    tomorrowNight: document.querySelector("[href$='tomorrow-night.css']"),
    highlight: document.querySelector("[href$='highlight.css']"),
  };

  function showThemes() {
    themePopup.style.display = "block";
    themeToggleButton.setAttribute("aria-expanded", true);
    themePopup.querySelector("button#" + get_theme()).focus();
  }

  function hideThemes() {
    themePopup.style.display = "none";
    themeToggleButton.setAttribute("aria-expanded", false);
    themeToggleButton.focus();
  }

  function get_theme() {
    var theme;
    try {
      theme = localStorage.getItem("mdbook-theme");
    } catch (e) {}
    if (theme === null || theme === undefined) {
      return default_theme;
    } else {
      return theme;
    }
  }

  function set_theme(theme, store = true) {
    let ace_theme;

    if (theme == "coal" || theme == "navy") {
      stylesheets.ayuHighlight.disabled = true;
      stylesheets.tomorrowNight.disabled = false;
      stylesheets.highlight.disabled = true;

      ace_theme = "ace/theme/tomorrow_night";
    } else if (theme == "ayu") {
      stylesheets.ayuHighlight.disabled = false;
      stylesheets.tomorrowNight.disabled = true;
      stylesheets.highlight.disabled = true;
      ace_theme = "ace/theme/tomorrow_night";
    } else {
      stylesheets.ayuHighlight.disabled = true;
      stylesheets.tomorrowNight.disabled = true;
      stylesheets.highlight.disabled = false;
      ace_theme = "ace/theme/dawn";
    }

    setTimeout(function () {
      themeColorMetaTag.content = getComputedStyle(
        document.body
      ).backgroundColor;
    }, 1);

    if (window.ace && window.editors) {
      window.editors.forEach(function (editor) {
        editor.setTheme(ace_theme);
      });
    }

    var previousTheme = get_theme();

    if (store) {
      try {
        localStorage.setItem("mdbook-theme", theme);
      } catch (e) {}
    }

    html.classList.remove(previousTheme);
    html.classList.add(theme);
  }

  // Set theme
  var theme = get_theme();

  set_theme(theme, false);

  themeToggleButton.addEventListener("click", function () {
    if (themePopup.style.display === "block") {
      hideThemes();
    } else {
      showThemes();
    }
  });

  themePopup.addEventListener("click", function (e) {
    var theme;
    if (e.target.className === "theme") {
      theme = e.target.id;
    } else if (e.target.parentElement.className === "theme") {
      theme = e.target.parentElement.id;
    } else {
      return;
    }
    set_theme(theme);
  });

  themePopup.addEventListener("focusout", function (e) {
    // e.relatedTarget is null in Safari and Firefox on macOS (see workaround below)
    if (
      !!e.relatedTarget &&
      !themeToggleButton.contains(e.relatedTarget) &&
      !themePopup.contains(e.relatedTarget)
    ) {
      hideThemes();
    }
  });

  // Should not be needed, but it works around an issue on macOS & iOS: https://github.com/rust-lang/mdBook/issues/628
  document.addEventListener("click", function (e) {
    if (
      themePopup.style.display === "block" &&
      !themeToggleButton.contains(e.target) &&
      !themePopup.contains(e.target)
    ) {
      hideThemes();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }
    if (!themePopup.contains(e.target)) {
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        hideThemes();
        break;
      case "ArrowUp":
        e.preventDefault();
        var li = document.activeElement.parentElement;
        if (li && li.previousElementSibling) {
          li.previousElementSibling.querySelector("button").focus();
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        var li = document.activeElement.parentElement;
        if (li && li.nextElementSibling) {
          li.nextElementSibling.querySelector("button").focus();
        }
        break;
      case "Home":
        e.preventDefault();
        themePopup.querySelector("li:first-child button").focus();
        break;
      case "End":
        e.preventDefault();
        themePopup.querySelector("li:last-child button").focus();
        break;
    }
  });
})();

(function sidebar() {
  var html = document.querySelector("html");
  var sidebar = document.getElementById("sidebar");
  var sidebarLinks = document.querySelectorAll("#sidebar a");
  var sidebarToggleButton = document.getElementById("sidebar-toggle");
  var sidebarResizeHandle = document.getElementById("sidebar-resize-handle");
  var firstContact = null;

  function showSidebar() {
    html.classList.remove("sidebar-hidden");
    html.classList.add("sidebar-visible");
    Array.from(sidebarLinks).forEach(function (link) {
      link.setAttribute("tabIndex", 0);
    });
    sidebarToggleButton.setAttribute("aria-expanded", true);
    sidebar.setAttribute("aria-hidden", false);
    try {
      localStorage.setItem("mdbook-sidebar", "visible");
    } catch (e) {}
  }

  var sidebarAnchorToggles = document.querySelectorAll("#sidebar a.toggle");

  function toggleSection(ev) {
    ev.currentTarget.parentElement.classList.toggle("expanded");
  }

  Array.from(sidebarAnchorToggles).forEach(function (el) {
    el.addEventListener("click", toggleSection);
  });

  function hideSidebar() {
    html.classList.remove("sidebar-visible");
    html.classList.add("sidebar-hidden");
    Array.from(sidebarLinks).forEach(function (link) {
      link.setAttribute("tabIndex", -1);
    });
    sidebarToggleButton.setAttribute("aria-expanded", false);
    sidebar.setAttribute("aria-hidden", true);
    try {
      localStorage.setItem("mdbook-sidebar", "hidden");
    } catch (e) {}
  }

  // Toggle sidebar
  sidebarToggleButton.addEventListener("click", function sidebarToggle() {
    if (html.classList.contains("sidebar-hidden")) {
      var current_width = parseInt(
        document.documentElement.style.getPropertyValue("--sidebar-width"),
        10
      );
      if (current_width < 150) {
        document.documentElement.style.setProperty("--sidebar-width", "150px");
      }
      showSidebar();
    } else if (html.classList.contains("sidebar-visible")) {
      hideSidebar();
    } else {
      if (getComputedStyle(sidebar)["transform"] === "none") {
        hideSidebar();
      } else {
        showSidebar();
      }
    }
  });

  sidebarResizeHandle.addEventListener("mousedown", initResize, false);

  function initResize(e) {
    window.addEventListener("mousemove", resize, false);
    window.addEventListener("mouseup", stopResize, false);
    html.classList.add("sidebar-resizing");
  }
  function resize(e) {
    var pos = e.clientX - sidebar.offsetLeft;
    if (pos < 20) {
      hideSidebar();
    } else {
      if (html.classList.contains("sidebar-hidden")) {
        showSidebar();
      }
      pos = Math.min(pos, window.innerWidth - 100);
      document.documentElement.style.setProperty("--sidebar-width", pos + "px");
    }
  }
  //on mouseup remove windows functions mousemove & mouseup
  function stopResize(e) {
    html.classList.remove("sidebar-resizing");
    window.removeEventListener("mousemove", resize, false);
    window.removeEventListener("mouseup", stopResize, false);
  }

  document.addEventListener(
    "touchstart",
    function (e) {
      firstContact = {
        x: e.touches[0].clientX,
        time: Date.now(),
      };
    },
    { passive: true }
  );

  document.addEventListener(
    "touchmove",
    function (e) {
      if (!firstContact) return;

      var curX = e.touches[0].clientX;
      var xDiff = curX - firstContact.x,
        tDiff = Date.now() - firstContact.time;

      if (tDiff < 250 && Math.abs(xDiff) >= 150) {
        if (
          xDiff >= 0 &&
          firstContact.x < Math.min(document.body.clientWidth * 0.25, 300)
        )
          showSidebar();
        else if (xDiff < 0 && curX < 300) hideSidebar();

        firstContact = null;
      }
    },
    { passive: true }
  );

  // Scroll sidebar to current active section
  var activeSection = document
    .getElementById("sidebar")
    .querySelector(".active");
  if (activeSection) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    activeSection.scrollIntoView({ block: "center" });
  }
})();

(function chapterNavigation() {
  document.addEventListener("keydown", function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }
    if (window.search && window.search.hasFocus()) {
      return;
    }

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        var nextButton = document.querySelector(".nav-chapters.next");
        if (nextButton) {
          window.location.href = nextButton.href;
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        var previousButton = document.querySelector(".nav-chapters.previous");
        if (previousButton) {
          window.location.href = previousButton.href;
        }
        break;
    }
  });
})();

(function clipboard() {
  var clipButtons = document.querySelectorAll(".clip-button");

  function hideTooltip(elem) {
    elem.firstChild.innerText = "";
    elem.className = "fa fa-copy clip-button";
  }

  function showTooltip(elem, msg) {
    elem.firstChild.innerText = msg;
    elem.className = "fa fa-copy tooltipped";
  }

  var clipboardSnippets = new ClipboardJS(".clip-button", {
    text: function (trigger) {
      hideTooltip(trigger);
      let playground = trigger.closest("pre");
      return playground_text(playground);
    },
  });

  Array.from(clipButtons).forEach(function (clipButton) {
    clipButton.addEventListener("mouseout", function (e) {
      hideTooltip(e.currentTarget);
    });
  });

  clipboardSnippets.on("success", function (e) {
    e.clearSelection();
    showTooltip(e.trigger, "Copied!");
  });

  clipboardSnippets.on("error", function (e) {
    showTooltip(e.trigger, "Clipboard error!");
  });
})();

(function scrollToTop() {
  var menuTitle = document.querySelector(".menu-title");

  menuTitle.addEventListener("click", function () {
    document.scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

(function controllMenu() {
  var menu = document.getElementById("menu-bar");

  (function controllPosition() {
    var scrollTop = document.scrollingElement.scrollTop;
    var prevScrollTop = scrollTop;
    var minMenuY = -menu.clientHeight - 50;
    // When the script loads, the page can be at any scroll (e.g. if you reforesh it).
    menu.style.top = scrollTop + "px";
    // Same as parseInt(menu.style.top.slice(0, -2), but faster
    var topCache = menu.style.top.slice(0, -2);
    menu.classList.remove("sticky");
    var stickyCache = false; // Same as menu.classList.contains('sticky'), but faster
    document.addEventListener(
      "scroll",
      function () {
        scrollTop = Math.max(document.scrollingElement.scrollTop, 0);
        // `null` means that it doesn't need to be updated
        var nextSticky = null;
        var nextTop = null;
        var scrollDown = scrollTop > prevScrollTop;
        var menuPosAbsoluteY = topCache - scrollTop;
        if (scrollDown) {
          nextSticky = false;
          if (menuPosAbsoluteY > 0) {
            nextTop = prevScrollTop;
          }
        } else {
          if (menuPosAbsoluteY > 0) {
            nextSticky = true;
          } else if (menuPosAbsoluteY < minMenuY) {
            nextTop = prevScrollTop + minMenuY;
          }
        }
        if (nextSticky === true && stickyCache === false) {
          menu.classList.add("sticky");
          stickyCache = true;
        } else if (nextSticky === false && stickyCache === true) {
          menu.classList.remove("sticky");
          stickyCache = false;
        }
        if (nextTop !== null) {
          menu.style.top = nextTop + "px";
          topCache = nextTop;
        }
        prevScrollTop = scrollTop;
      },
      { passive: true }
    );
  })();
  (function controllBorder() {
    menu.classList.remove("bordered");
    document.addEventListener(
      "scroll",
      function () {
        if (menu.offsetTop === 0) {
          menu.classList.remove("bordered");
        } else {
          menu.classList.add("bordered");
        }
      },
      { passive: true }
    );
  })();
})();
