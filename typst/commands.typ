#import "common.typ": custom_table, conf
#show: conf.with()

#custom_table(
  [Core Commands               ], [                                          ],
  text(14pt, `cd <path>`       ), [Changes your working directory to `<path>`],
  text(14pt, `ls`              ), [Lists the files in the working directory  ],
  text(14pt, `ls <path>`       ), [Lists the files in `<path>`               ],
  text(14pt, `<command> --help`), [Print help for `<command>`                ],                 
  text(14pt, `man <command>`   ), [Prints the help page for `<command>`      ],
)

#custom_table(
  spacing: 1em,
  [Files & Directories                     ], [                                                                        ],
  text(14pt, `cat <files>`                 ), [Print the contents of the `<files>`                                     ],
  text(14pt, `cp <source> <destination>`   ), [Copies files from `<source>` to `<destination>`                         ],
  text(14pt, `cp -r <source> <destination>`), [Copies directories and their contents from `<source`> to `<destination>`],
  text(14pt, `mkdir <directories>`         ), [Create the `<directories>`                                              ],
  text(14pt, `mv <source> <destination>`   ), [Moves files or directories from `<source>` to `<destination>`           ],
  text(14pt, `rm <files>`                  ), [Removes the `<files>`                                                   ],
  text(14pt, `rm -r <directories>`         ), [Removes the `<directories>` and all of their contents                   ],
  text(14pt, `touch <files>`               ), [Creates the `<files>`                                                   ]
)
