#import "common.typ": custom_table, conf
#show: conf.with()

#place(top + right, text(rgb("#AA4466"))[Replace Ctrl with ⌘ on MacOS])

#custom_table(
  [Movement                  ], [                                           ],
  [Ctrl + Right & Ctrl + Left], [Move whole word                            ],
  [Home & End                ], [Start and end of line                      ],
  [Shift                     ], [Holding Shift while moving will select text]
)

#custom_table(
  [Clipboard], [                           ],
  [Ctrl + c ], [Copy selection to clipboard],
  [Ctrl + v ], [Print clipboard            ],
  [Ctrl + x ], [Cut text to clipboard      ]
)

#custom_table(
  [Files   ], [               ],
  [Ctrl + s], [Save file      ],
  [Ctrl + w], [Close file     ],
  [Ctrl + n], [Create new file]
)

#custom_table(
  [Find & Replace  ], [                                  ],
  [Ctrl + f        ], [Find occurences in current file   ],
  [Ctrl + Shift + f], [Find occurences in project        ],
  [Ctrl + h        ], [Replace occurences in current file],
  [Ctrl + Shift + h], [Replace occurences in project     ]
)

#custom_table(
  [Command Palette ], [                            ],
  [Ctrl + p        ], [Search in project files     ],
  [Ctrl + Shift + p], [Open palette in command mode],
  [Ctrl + g        ], [Go to line                  ]
)
