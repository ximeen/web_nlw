import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Select from "@radix-ui/react-select";
import axios from "axios";

import { ArrowBendRightDown, Check, GameController } from "phosphor-react";
import { Input } from "./Input";
import { FormEvent, useEffect, useState } from "react";

interface Game {
  id: string;
  title: string;
}
export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChat, setUseVoiceChat] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  useEffect(() => {
    axios("https://backen-nlw-esports.herokuapp.com/games").then((res) => {
      setGames(res.data);
    });
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      await axios.post(`https://backen-nlw-esports.herokuapp.com/games/${selectValue}/ads`, {
        name: data.name,
        yarsPlaying: Number(data.yarsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStar: data.hourStar,
        hourEnd: data.hourEnd,
        useVoiceChat: useVoiceChat,
      });
      alert("Ad created");
    } catch (err) {
      console.log(err);

      alert("Error created ad");
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique seu anúncio
        </Dialog.Title>

        <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Selecione o game
            </label>
            <Select.Root value={selectValue} onValueChange={setSelectValue}>
              <Select.Trigger
                id="game"
                className="bg-zinc-900 rounded text-sm text-zinc-500 w-full flex py-3 px-4 justify-between items-center"
              >
                <Select.Value placeholder="Selecione o game" />
                <Select.Icon>
                  <ArrowBendRightDown size={15} className="text-white" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="bg-white text-center rounded">
                  <Select.Viewport className="text-violet-500 py-2 cursor-pointer">
                    {games.map((game) => {
                      return (
                        <Select.Item
                          key={game.id}
                          value={game.id}
                          className="py-2 px-2 hover:bg-violet-500 hover:text-white rounded-lg flex justify-between items-center"
                        >
                          <Select.ItemText className="">
                            {game.title}
                          </Select.ItemText>
                          <Select.ItemIndicator className="">
                            <Check size={15} />
                          </Select.ItemIndicator>
                        </Select.Item>
                      );
                    })}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Qual seu nome?</label>
            <Input
              name="name"
              id="name"
              placeholder="Como te chamam dentro do game?"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yarsPlaying">Joga a quantos anos?</label>
              <Input
                name="yarsPlaying"
                id="yarsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual teu discord?</label>
              <Input
                name="discord"
                id="discord"
                type="text"
                placeholder="User#0000"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                onValueChange={setWeekDays}
              >
                <ToggleGroup.ToggleGroupItem
                  value="0"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="domingo"
                >
                  D
                </ToggleGroup.ToggleGroupItem>

                <ToggleGroup.ToggleGroupItem
                  value="1"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="segunda"
                >
                  S
                </ToggleGroup.ToggleGroupItem>

                <ToggleGroup.ToggleGroupItem
                  value="2"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="terca"
                >
                  T
                </ToggleGroup.ToggleGroupItem>

                <ToggleGroup.ToggleGroupItem
                  value="3"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="quarta"
                >
                  Q
                </ToggleGroup.ToggleGroupItem>

                <ToggleGroup.ToggleGroupItem
                  value="4"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="quinta"
                >
                  Q
                </ToggleGroup.ToggleGroupItem>

                <ToggleGroup.ToggleGroupItem
                  value="5"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="sexta"
                >
                  S
                </ToggleGroup.ToggleGroupItem>

                <ToggleGroup.ToggleGroupItem
                  value="6"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="sabado"
                >
                  S
                </ToggleGroup.ToggleGroupItem>
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStar">Qual horario?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  name="hourStar"
                  id="hourStar"
                  type="time"
                  placeholder="De"
                />
                <Input
                  name="hourEnd"
                  id="hourEnd"
                  type="time"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>
          <label className="mt-2 items-center flex gap-2 text-sm">
            <Checkbox.Root
              checked={useVoiceChat}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChat(true);
                } else {
                  setUseVoiceChat(false);
                }
              }}
              className="p-1 w-6 h-6 rounded bg-zinc-900 "
            >
              <Checkbox.CheckboxIndicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.CheckboxIndicator>
            </Checkbox.Root>
            Costumo me conectar no voip
          </label>
          <footer className=" mt-2 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>

            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
