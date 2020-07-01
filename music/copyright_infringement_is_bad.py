list_names = [


"Toosie Slide.mp3","Tusa.mp3","Watermelon Sugar.mp3","WHATS POPPIN.mp3","Yo Perreo Sola.mp3","Adore You.mp3","After Party.mp3","Bad Bunny.mp3","bad guy.mp3","Be Kind.mp3","Before You Go.mp3","Blinding Lights.mp3","Blueberry Faygo.mp3","Boss Bitch.mp3","Break My Heart.mp3","Breaking Me.mp3","Circles.mp3","Dance Monkey.mp3","death bed (coffee for your head).mp3","Don't Start Now.mp3","Falling.mp3","GOOBA.mp3","goosebumps.mp3","Hasta Que Dios Diga.mp3","HIGHEST IN THE ROOM.mp3","ily (i love you baby).mp3","In Your Eyes.mp3","Intentions.mp3","Life Is Good.mp3","Lose Somebody.mp3","MAMACITA.mp3","Memories.mp3","Party Girl.mp3","Play Date.mp3","Rain On Me.mp3","ROCKSTAR.mp3","Roses (Imanbek Remix).mp3","ROXANNE.mp3","Safaera.mp3","Savage Remix.mp3","Say So.mp3","Senorita.mp3","SICKO MODE.mp3","Someone You Loved.mp3","Sour Candy.mp3","Stuck with U.mp3","Sunday Best.mp3","Supalonely.mp3","The Box.mp3","THE SCOTTS.mp3","TKN.mp3"

]

import os, shutil

for i in range(len(list_names)):
    src_dir = os.path.join(os.curdir, "sample_music.mp3")
    dst_dir = os.path.join(os.curdir, "subfolder")
    shutil.copy(src_dir, dst_dir)

    src_file = os.path.join(dst_dir, "sample_music.mp3")
    new_file_name = os.path.join(dst_dir, list_names[i])
    os.rename(src_file, new_file_name)
    print("renamed " + new_file_name)
print("done")
