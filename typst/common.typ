#let conf(doc) = {
  // Background color.
  set page(fill: none)

  // Font, make sure that the nunito font is installed before compiling the document.
  set text(font: "nunito")

  show table.cell: it => {
    // Align columns.
    let text_align = left
    if (it.x == 1) {
      text_align = right
    }
    set align(text_align + horizon)

    if it.y == 0 {
      // Header styling.
      set text(20pt, rgb("#4F5459"))
      strong(it)
    } else if it.x == 0 {
      // Left column styling.
      set text(11pt, rgb("#AA4466"))
      strong(it)
    } else {
      // Right column styling.
      set text(11pt, rgb("#6B7280"))
      emph(it)
    }
  }

  doc
}

#let custom_table(spacing: 0.8em, left_header, right_header, ..rows) = table(
  inset: (x: 0em, y: spacing),
  stroke: none,
  columns: (1fr, 1fr),
  table.header(left_header, right_header),
  table.hline(stroke: rgb("#E5E7EB")),
  ..rows.pos().intersperse(table.hline(stroke: rgb("#E5E7EB")))
)
