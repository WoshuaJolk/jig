"use client";

import { Avatar } from "./Avatar";
import { SectionHeader } from "./SectionHeader";

export function PeopleList({
  people,
  activePerson,
  setActivePerson,
  removePerson,
  addPerson,
  deepEdit,
  onRenamePerson,
}: {
  people: string[];
  activePerson: string | null;
  setActivePerson: (p: string | null) => void;
  removePerson: (name: string) => void;
  addPerson: () => void;
  deepEdit?: boolean;
  onRenamePerson?: (oldName: string, newName: string) => void;
}) {
  if (deepEdit) {
    return (
      <div className="mb-6">
        <SectionHeader label="People" />
        <div className="space-y-1.5">
          {people.map((person) => (
            <div key={person} className="flex items-center gap-2">
              <button
                onClick={() => removePerson(person)}
                className="text-zinc-400 hover:text-red-500 text-sm font-bold flex-shrink-0 w-4 text-center"
              >
                &times;
              </button>
              {onRenamePerson ? (
                <input
                  value={person}
                  onChange={(e) => onRenamePerson(person, e.target.value)}
                  className="flex-1 bg-transparent text-base outline-none border-b border-dashed border-zinc-400"
                />
              ) : (
                <span className="text-base">{person}</span>
              )}
            </div>
          ))}
          <button
            onClick={addPerson}
            className="text-xs text-zinc-400 hover:text-zinc-600 mt-2"
          >
            + Add friend
          </button>
        </div>
      </div>
    );
  }

  // Assignment mode
  return (
    <div className="mb-6">
      <SectionHeader label="Tap friend icon to assign items" />
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          {people.map((person, i) => (
            <button
              key={person}
              onClick={() =>
                setActivePerson(activePerson === person ? null : person)
              }
              className={`transition-opacity ${
                activePerson && activePerson !== person
                  ? "opacity-30"
                  : "opacity-100"
              }`}
            >
              <Avatar name={person} index={i} size="md" />
            </button>
          ))}
        </div>
        <div className="text-base text-right">
          {activePerson && <span className="font-bold">{activePerson}</span>}
        </div>
      </div>
    </div>
  );
}
