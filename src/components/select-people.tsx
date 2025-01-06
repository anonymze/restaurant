import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select";


export function SelectPeople() {
	return (
		<Select>
			<SelectTrigger className="w-full pl-12">
				<SelectValue placeholder="Sélectionnez combien vous êtes" />
			</SelectTrigger>
			<SelectContent className="bg-white">
				<SelectItem className="hover:bg-primary" value="1">1 personne</SelectItem>
				<SelectItem className="hover:bg-primary" value="2">2 personnes</SelectItem>
				<SelectItem className="hover:bg-primary" value="3">3 personnes</SelectItem>
				<SelectItem className="hover:bg-primary" value="4">4 personnes</SelectItem>
				<SelectItem className="hover:bg-primary" value="5">5 personnes</SelectItem>
				<SelectItem className="hover:bg-primary" value="6">6 personnes</SelectItem>
				<SelectItem className="hover:bg-primary" value="7+">7 personnes ou plus</SelectItem>
			</SelectContent>
		</Select>
	);
}
