// Background color, use second version for PNGs.
#set page(fill: color.hsl(30deg, 6%, 94%))
//#set page(fill: none)

// Font, make sure that the nunito font is installed before compiling the document.
#set text(font: "nunito")

#set table(inset: (x: 0em, y: 1em), stroke: none)
#show table.cell: it => {
  // Align columns.
  let text_align = left
  if (it.x == 1) {
    text_align = right
  }
  set align(text_align)

  if it.y == 0 {
    // Header styling.
    set text(20pt, rgb("#4F5459"))
    strong(it)
  } else if it.x == 0 {
    // Left column styling.
    set text(14pt, rgb("#AA4466"))
    strong(it)
  } else {
    // Right column styling.
    set text(11pt, rgb("#6B7280"))
    emph(it)
  }
}

#let custom_table(left_header, right_header, ..rows) = table(
  columns: (1fr, 1fr),
  table.header(left_header, right_header),
  ..rows.pos().intersperse(table.hline(stroke: rgb("#E5E7EB")))
)



#custom_table(
  [Command                        ], [Description                                                             ],
  [`cat <files>`                  ], [Print the contents of the `<files>`                                     ],
  [`cd <path>`                    ], [Changes your working directory to `<path>`                              ],
  [`cp <source> <destination>`    ], [Copies files from `<source>` to `<destination>`                         ],
  [`cp -r <source> <destination>` ], [Copies directories and their contents from `<source`> to `<destination>`],
  [`ls`                           ], [Lists the files in the working directory                                ],
  [`ls <path>`                    ], [Lists the files in `<path>`                                             ],
  [`<command> --help`             ], [Print help for `<command>`                                              ],                 
  [`man <command>`                ], [Prints the help page for `<command>`                                    ],
  [`mkdir <directories>`          ], [Create the `<directories>`                                              ],
  [`mv <source> <destination>`    ], [Moves files or directories from `<source>` to `<destination>`           ],
  [`rm <files>`                   ], [Removes the `<files>`                                                   ],
  [`rm -r <directories>`          ], [Removes the `<directories>` and all of their contents                   ],
  [`touch <files>`                ], [Creates the `<files>`                                                   ]
)
